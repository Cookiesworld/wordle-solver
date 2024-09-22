
import React from "react";
import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";

import LetterInput from "./letterInput";

it("renders with letters", () => {
    render(<LetterInput label='test' />);

    const inputEl = screen.getByTestId("letter-input");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "text");

    expect(screen.getByLabelText("test"));
});