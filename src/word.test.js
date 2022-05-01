// hello.test.js

import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Word from "./word";

let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("renders with letters", () => {
    act(() => {
        render(<Word />, container);
    });
    expect(container.textContent).toBe("");

    act(() => {
        render(<Word word="abc" />, container);
    });
    expect(container.textContent).toBe("abc");

    act(() => {
        render(<Word word="cde" />, container);
    });
    expect(container.textContent).toBe("cde");
});