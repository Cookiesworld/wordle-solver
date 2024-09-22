import React from "react";
import Word from "./word";
import { render, screen } from "@testing-library/react";
import { expect, it, describe } from "vitest";

describe("Words component", () => {
    it("Have no content when nothing passed in", () => {
        const { container } = render(<Word />);
        expect(container.textContent).toBeEmptyDOMElement();
    })

    it("renders with letters", () => {
        render(<Word word="abc" />);
        expect(screen.getByText("abc"));
    });
});
