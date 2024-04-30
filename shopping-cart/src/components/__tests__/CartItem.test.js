import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CartItem from '../CartItem';

const testEntry = { id: 1, quantity: 2 };
const testProduct = {
  id: 1,
  title: 'Product 1',
  image: 'product-1.jpg',
  price: 100,
};
const editCart = jest.fn();

describe('CartItem', () => {
  it('displays the image of the product', () => {
    render(
      <CartItem entry={testEntry} product={testProduct} editCart={editCart} />
    );
    const image = screen.getByRole('img', {
      name: testProduct.title,
    });
    expect(image).toBeInTheDocument();
    expect(image.getAttribute('src')).toBe(testProduct.image);
  });

  it('displays the title of the product', () => {
    render(
      <CartItem entry={testEntry} product={testProduct} editCart={editCart} />
    );
    const title = screen.getByText(testProduct.title);
    expect(title).toBeInTheDocument();
  });

  it('calculates the price based on quantity', () => {
    render(
      <CartItem entry={testEntry} product={testProduct} editCart={editCart} />
    );
    const price = screen.getByText(
      `$${(testEntry.quantity * testProduct.price).toFixed(2)}`
    );
    expect(price).toBeInTheDocument();
  });

  it('correctly removes entry from the cart', () => {
    render(
      <CartItem entry={testEntry} product={testProduct} editCart={editCart} />
    );
    const removeButton = screen.getByRole('button', {
      name: /remove from cart/i,
    });
    userEvent.click(removeButton);
    expect(editCart).toHaveBeenCalledWith(testEntry.id, 0);
  });
});
