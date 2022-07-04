import { render, screen } from '@testing-library/react';
import App from './App';

test('renders h1', () => {
  render(<App />);
  const linkElement = screen.getByText(/ledgering your crypto/i);
  expect(linkElement).toBeInTheDocument();
});
