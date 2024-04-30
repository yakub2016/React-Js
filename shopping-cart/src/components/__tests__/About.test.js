import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import About from '../About';

describe('About', () => {
  it('renders heading', () => {
    render(
      <BrowserRouter>
        <About />
      </BrowserRouter>
    );
    const headingEl = screen.getByRole('heading', {
      name: /welcome to jewelry heaven/i,
    });
    expect(headingEl).toBeInTheDocument();
  });

  it('renders paragraphs', () => {
    render(
      <BrowserRouter>
        <About />
      </BrowserRouter>
    );
    const paragraphsEl = screen.getAllByTestId('paragraph');
    expect(paragraphsEl).toHaveLength(3);
  });

  it('renders a list', () => {
    render(
      <BrowserRouter>
        <About />
      </BrowserRouter>
    );
    const listEl = screen.getByRole('list');
    expect(listEl).toBeInTheDocument();
  });
});
