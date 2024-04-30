import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../Home';

describe('Home', () => {
  it('renders text', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const textEl = screen.getByText(/the online premium jewelry store/i);
    expect(textEl).toBeInTheDocument();
  });

  it('renders a link', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const linkEl = screen.getByRole('link', { name: /enter/i });
    expect(linkEl).toBeInTheDocument();
  });
});
