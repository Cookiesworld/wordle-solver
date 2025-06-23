import { describe, it, expect } from "vitest";
import wordsReducer from "./wordsReducer";

describe("wordsReducer", () => {
    it("should add a word to the list", () => {
        const initialWords = { words: ["apple", "banana"], excludeLetters: "", letters: "", positionalLetters: [] };
        const action = { type: "add", value: "cherry" };
        const result = wordsReducer(initialWords, action);
        expect(result).toEqual({
            filteredWords: ["apple", "banana", "cherry"],
            words: ["apple", "banana", "cherry"],
            excludeLetters: "",
            letters: "",
            positionalLetters: []
        });
    });

    it("should filter words based on included letters", () => {
        const initialWords = { words: ["apple", "banana", "cherry"], excludeLetters: "", letters: "", positionalLetters: [] };
        const action = { type: "filter", letters: "a", excludeLetters: "", positional: [] };
        const result = wordsReducer(initialWords, action);
        expect(result.filteredWords).toEqual(["apple", "banana"]);
    });

    it("should filter words based on excluded letters", () => {
        const initialWords = { words: ["apple", "banana", "cherry"], excludeLetters: "", letters: "", positionalLetters: [] };
        const action = { type: "filter", letters: "", excludeLetters: "a", positional: [] };
        const result = wordsReducer(initialWords, action);
        expect(result.filteredWords).toEqual(["cherry"]);
    });

    it("should filter words based on positional constraints", () => {
        const initialWords = { words: ["apple", "banana", "cherry"], excludeLetters: "", letters: "", positionalLetters: [] };
        const action = { type: "filter", letters: "", excludeLetters: "", positional: ["a", "", "", "", ""] };
        const result = wordsReducer(initialWords, action);
        expect(result.filteredWords).toEqual(["apple"]);
    });

    it("should handle empty or undefined letters, excludeLetters, and positional", () => {
        const initialWords = { words: ["apple", "banana", "cherry"], excludeLetters: "", letters: "", positionalLetters: [] };
        // All empty
        let action = { type: "filter", letters: "", excludeLetters: "", positional: [] };
        let result = wordsReducer(initialWords, action);
        expect(result.filteredWords).toEqual(["apple", "banana", "cherry"]);

        // All undefined
        action = { type: "filter" };
        result = wordsReducer(initialWords, action);
        expect(result.filteredWords).toEqual(["apple", "banana", "cherry"]);

        // Only positional undefined
        action = { type: "filter", letters: "", excludeLetters: "" };
        result = wordsReducer(initialWords, action);
        expect(result.filteredWords).toEqual(["apple", "banana", "cherry"]);

        // Only letters undefined
        action = { type: "filter", excludeLetters: "", positional: [] };
        result = wordsReducer(initialWords, action);
        expect(result.filteredWords).toEqual(["apple", "banana", "cherry"]);

        // Only excludeLetters undefined
        action = { type: "filter", letters: "", positional: [] };
        result = wordsReducer(initialWords, action);
        expect(result.filteredWords).toEqual(["apple", "banana", "cherry"]);
    });

    it("should throw an error for unhandled action types", () => {
        const initialWords = { words: ["apple", "banana"], excludeLetters: "", letters: "", positionalLetters: [] };
        const action = { type: "unknown" };
        expect(() => wordsReducer(initialWords, action)).toThrow("Unhandled action unknown");
    });
});