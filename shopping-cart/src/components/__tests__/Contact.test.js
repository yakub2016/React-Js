import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Contact from '../Contact';

describe('Contact', () => {
  it('renders headings', () => {
    render(
      <BrowserRouter>
        <Contact />
      </BrowserRouter>
    );
    const headingsEl = screen.getAllByRole('heading');
    expect(headingsEl).toHaveLength(4);
  });

  it('renders paragraphs', () => {
    render(
      <BrowserRouter>
        <Contact />
      </BrowserRouter>
    );
    const paragraphsEl = screen.getAllByTestId('paragraph');
    expect(paragraphsEl).toHaveLength(4);
  });
});
