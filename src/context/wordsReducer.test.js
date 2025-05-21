import { describe, it, expect } from "vitest";
import wordsReducer from "./wordsReducer";

describe("wordsReducer", () => {
    it("should add a word to the list", () => {
        const initialWords = ["apple", "banana"];
        const action = { type: "add", value: "cherry" };
        const result = wordsReducer(initialWords, action);
        expect(result).toEqual(["apple", "banana", "cherry"]);
    });

    it("should filter words based on included letters", () => {
        const initialWords = { words: ["apple", "banana", "cherry"] };
        const action = { type: "filter", letters: "a", excludeLetters: "", positional: [] };
        const result = wordsReducer(initialWords, action);
        expect(result.filteredWords).toEqual(["apple", "banana"]);
    });

    it("should filter words based on excluded letters", () => {
        const initialWords = { words: ["apple", "banana", "cherry"] };
        const action = { type: "filter", letters: "", excludeLetters: "a", positional: [] };
        const result = wordsReducer(initialWords, action);
        expect(result.filteredWords).toEqual(["cherry"]);
    });

    it("should filter words based on positional constraints", () => {
        const initialWords = { words: ["apple", "banana", "cherry"] };
        const action = { type: "filter", letters: "", excludeLetters: "", positional: ["a", "", ""] };
        const result = wordsReducer(initialWords, action);
        expect(result.filteredWords).toEqual(["apple"]);
    });

    it("should throw an error for unhandled action types", () => {
        const initialWords = ["apple", "banana"];
        const action = { type: "unknown" };
        expect(() => wordsReducer(initialWords, action)).toThrow("Unhandled action unknown");
    });
});