import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/lWordle Helper/i);
  expect(linkElement).toBeInTheDocument();
});
