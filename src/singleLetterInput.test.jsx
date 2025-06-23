import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import SingleLetterInput from "./singleLetterInput";

// Helper to get the input element
const getInput = () => screen.getByRole("textbox");

describe("SingleLetterInput", () => {
  it("renders with the correct value", () => {
    render(<SingleLetterInput letter="a" setLetter={vi.fn()} position={0} />);
    expect(getInput().value).toBe("a");
  });

  it("calls setLetter with the correct value and position on valid input", () => {
    const setLetter = vi.fn();
    render(<SingleLetterInput letter="" setLetter={setLetter} position={2} />);
    const input = getInput();
    fireEvent.change(input, { target: { value: "b" } });
    expect(setLetter).toHaveBeenCalledWith("b", 2);
    // Note: input.value will not update in a controlled component unless the parent updates the prop
    // So we do not assert input.value here
  });

  it("does not call setLetter and sets custom validity on invalid input", () => {
    const setLetter = vi.fn();
    render(<SingleLetterInput letter="" setLetter={setLetter} position={1} />);
    const input = getInput();
    fireEvent.change(input, { target: { value: "1" } });
    expect(setLetter).not.toHaveBeenCalled();
    expect(input.validationMessage).toBe(
      "Field must contain 'Characters only'"
    );
  });

  it("clears custom validity on valid input after invalid", () => {
    const setLetter = vi.fn();
    render(<SingleLetterInput letter="" setLetter={setLetter} position={1} />);
    const input = getInput();
    // First enter invalid
    fireEvent.change(input, { target: { value: "1" } });
    expect(input.validationMessage).toBe(
      "Field must contain 'Characters only'"
    );
    // Then enter valid
    fireEvent.change(input, { target: { value: "c" } });
    expect(input.validationMessage).toBe("");
    expect(setLetter).toHaveBeenCalledWith("c", 1);
  });
});
