import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CartSummary from '../CartSummary';

const testCart = [
  { id: 1, quantity: 2 },
  { id: 2, quantity: 1 },
];
const testProducts = [
  { id: 1, price: 100 },
  { id: 2, price: 200 },
];
const handleCheckout = jest.fn();
const handleContinue = jest.fn();

describe('CartSummary', () => {
  it('displays the correct total', () => {
    render(<CartSummary cart={testCart} products={testProducts} />);
    const total = 400;
    expect(
      screen.getByText(`Your total is: $${total.toFixed(2)}`)
    ).toBeInTheDocument();
  });

  it('invokes handleCheckout properly', () => {
    render(
      <CartSummary
        cart={testCart}
        products={testProducts}
        handleCheckout={handleCheckout}
      />
    );
    const checkoutButton = screen.getByRole('button', { name: /checkout/i });
    userEvent.click(checkoutButton);
    expect(handleCheckout).toHaveBeenCalled();
  });

  it('invokes handleContinue properly', () => {
    render(
      <CartSummary
        cart={testCart}
        products={testProducts}
        handleContinue={handleContinue}
      />
    );
    const continueButton = screen.getByRole('button', {
      name: /continue shopping/i,
    });
    userEvent.click(continueButton);
    expect(handleContinue).toHaveBeenCalled();
  });
});
