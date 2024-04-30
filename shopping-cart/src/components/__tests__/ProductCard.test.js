import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProductCard from '../ProductCard';

const testProduct = {
  id: 1,
  title: 'Product title',
  description: 'Product description',
  price: 123,
  rating: {
    rate: 4.2,
  },
};

describe('ProductCard', () => {
  it('renders a title', () => {
    render(<ProductCard product={testProduct} />);
    const titleEl = screen.getByText(testProduct.title);
    expect(titleEl).toBeInTheDocument();
  });

  it('renders an image', async () => {
    render(<ProductCard product={testProduct} />);
    const imageEl = screen.getByRole('img', { name: testProduct.title });
    expect(imageEl).toBeInTheDocument();
  });

  it('renders rating', () => {
    render(<ProductCard product={testProduct} />);
    const ratingEl = screen.getByText('★' + testProduct.rating.rate);
    expect(ratingEl).toBeInTheDocument();
  });

  it('renders a description', () => {
    render(<ProductCard product={testProduct} />);
    const descriptionEl = screen.getByText(testProduct.description);
    expect(descriptionEl).toBeInTheDocument();
  });

  it('renders a price', () => {
    render(<ProductCard product={testProduct} />);
    const priceEl = screen.getByText('$' + testProduct.price.toFixed(2));
    expect(priceEl).toBeInTheDocument();
  });

  it('renders price details', () => {
    render(<ProductCard product={testProduct} />);
    const priceEl = screen.getByText('$' + testProduct.price.toFixed(2));
    const incrementEl = screen.getByRole('button', { name: '+' });
    userEvent.click(incrementEl);
    userEvent.click(incrementEl);
    expect(priceEl).toHaveTextContent(/\(\s*\$\s*123.00\s*×\s*3\s*\)/i);
  });

  it('renders an increment button', () => {
    render(<ProductCard product={testProduct} />);
    const incrementEl = screen.getByRole('button', { name: '+' });
    expect(incrementEl).toBeInTheDocument();
  });

  it('renders a decrement button', () => {
    render(<ProductCard product={testProduct} />);
    const decrementEl = screen.getByRole('button', { name: '-' });
    expect(decrementEl).toBeInTheDocument();
  });

  it('renders an add to cart button', () => {
    render(<ProductCard product={testProduct} />);
    const addToCartEl = screen.getByRole('button', { name: 'Add to cart' });
    expect(addToCartEl).toBeInTheDocument();
  });

  it('renders product quantity', () => {
    render(<ProductCard product={testProduct} />);
    const incrementEl = screen.getByRole('button', { name: '+' });
    const addToCartEl = screen.getByRole('button', { name: 'Add to cart' });
    userEvent.click(incrementEl);
    userEvent.click(incrementEl);
    expect(addToCartEl).toHaveTextContent('Add to cart (3)');
  });
});
