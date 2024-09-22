import { render, screen } from "@testing-library/react";
import LetterInput from "./letterInput";
import { it, expect } from "vitest";

it("renders with letters", () => {
    render(<LetterInput label='test' />);

    const inputEl = screen.getByTestId("letter-input");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "text");

    expect(screen.getByLabelText("test"));
});