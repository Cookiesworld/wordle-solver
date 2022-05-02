// hello.test.js

import React from "react";
import { render, screen, unmountComponentAtNode } from '@testing-library/react';;
import { act } from "react-dom/test-utils";


import LetterInput from "./letterInput";

let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    container.remove();
    container = null;
});

it("renders with letters", () => {
    act(() => {
        render(<LetterInput label='test' />, container);
    });
    const inputEl = screen.getByTestId("letter-input");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "text");

    const labelEl = screen.getByTestId("letter-label");
    expect(labelEl).toBeInTheDocument();
    expect(labelEl.textContent).toBe("test ");
});