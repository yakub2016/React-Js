import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../Header';

describe('Header', () => {
  it('renders a title', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const titleEl = screen.getByRole('link', { name: /jewelry heaven/i });
    expect(titleEl).toBeInTheDocument();
  });

  it('renders a link to shop page', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const shopEl = screen.getByRole('link', { name: /shop/i });
    expect(shopEl).toBeInTheDocument();
  });

  it('renders a link to about page', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const aboutEl = screen.getByRole('link', { name: /about/i });
    expect(aboutEl).toBeInTheDocument();
  });

  it('renders a link to contact page', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const contactEl = screen.getByRole('link', { name: /contact/i });
    expect(contactEl).toBeInTheDocument();
  });
});
