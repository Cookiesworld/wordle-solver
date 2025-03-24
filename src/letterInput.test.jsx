import { render, screen } from "@testing-library/react";
import LetterInput from "./letterInput";
import { it, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";

it("renders with letters", () => {
  render(<LetterInput label="test" />);

  const inputEl = screen.getByTestId("letter-input");
  expect(inputEl).toBeInTheDocument();
  expect(inputEl).toHaveAttribute("type", "text");

  expect(screen.getByLabelText("test"));
});

it("Accepts letters", async () => {
  const mockSetLetters = vi.fn();
  render(<LetterInput label="test" setLetters={mockSetLetters} />);
  const inputEl = screen.getByTestId("letter-input");

  await userEvent.type(inputEl, "a");

  expect(inputEl.checkValidity()).toBe(true);
});

it.each(
  ["%", "$", "!", " ", "&", "@"] // Add more unwanted characters
)(`Rejects unwanted character %s`, async (character) => {
  const mockSetLetters = vi.fn();
  render(<LetterInput label="test" setLetters={mockSetLetters} />);
  const inputEl = screen.getByTestId("letter-input");

  await userEvent.type(inputEl, character);

  expect(inputEl.checkValidity()).toBe(false);
  expect(inputEl.validationMessage).toBe(
    "Field must contain 'Characters only'"
  );
});
