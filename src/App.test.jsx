import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import App from './App';

it('renders title', () => {
  render(<App />);
  const linkElement = screen.getByText("Wordle Helper");
  expect(linkElement).toBeInTheDocument();
});


