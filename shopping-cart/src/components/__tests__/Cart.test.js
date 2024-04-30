import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Cart from '../Cart';

const testCart = [
  { id: 1, quantity: 1 },
  { id: 2, quantity: 3 },
];
const testProducts = [
  { id: 1, title: 'Product 1', price: 100 },
  { id: 2, title: 'Product 2', price: 200 },
];
const editCart = jest.fn();
const handleCheckout = jest.fn();

describe('Cart', () => {
  it('renders cart items', () => {
    render(
      <BrowserRouter>
        <Cart
          cart={testCart}
          products={testProducts}
          editCart={editCart}
          handleCheckout={handleCheckout}
        />
      </BrowserRouter>
    );
    const cartItems = screen.getAllByTestId('cart-item');
    expect(cartItems.length).toBe(2);
  });

  it('renders cart summary', () => {
    render(
      <BrowserRouter>
        <Cart
          cart={testCart}
          products={testProducts}
          editCart={editCart}
          handleCheckout={handleCheckout}
        />
      </BrowserRouter>
    );
    const cartSummary = screen.getByTestId('cart-summary');
    expect(cartSummary).toBeInTheDocument();
  });

  it('navigates to shop page on continue', () => {
    const navigate = jest.fn();
    jest
      .spyOn(require('react-router'), 'useNavigate')
      .mockImplementation(() => navigate);
    render(
      <BrowserRouter>
        <Cart
          cart={testCart}
          products={testProducts}
          editCart={editCart}
          handleCheckout={handleCheckout}
        />
      </BrowserRouter>
    );
    const continueButton = screen.getByRole('button', {
      name: /continue/i,
    });
    userEvent.click(continueButton);
    expect(navigate).toHaveBeenCalledWith('/shop');
  });
});
