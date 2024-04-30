import { render, screen } from '@testing-library/react';
import Shop from '../Shop';

const testProducts = [
  { id: 1, name: 'Product 1' },
  { id: 2, name: 'Product 2' },
  { id: 3, name: 'Product 3' },
];

describe('Shop', () => {
  it('displays a loading message when there are no products', () => {
    render(<Shop products={null} />);
    const loadingEl = screen.getByText('Loading...');
    expect(loadingEl).toBeInTheDocument();
  });

  it('maps over the products prop and creates a ProductCard component for each product', () => {
    render(<Shop products={testProducts} />);
    const productCards = screen.queryAllByTestId('product-card');
    expect(productCards).toHaveLength(testProducts.length);
  });
});
