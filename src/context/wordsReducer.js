/**
 * wordsReducer - handles word list state for Wordle Helper
 *
 * State object shape (used for both input and output):
 * {
 *   filteredWords: string[],      // The current filtered list of words (output)
 *   words: string[],              // The full list of words (input/output)
 *   excludeLetters: string,       // Letters to exclude from results (input/output)
 *   letters: string,              // Letters that must be included in results (input/output)
 *   positionalLetters: string[]   // Array of known letters at specific positions (input/output)
 * }
 *
 * Actions:
 *   - { type: "add", value: string }
 *   - { type: "filter", letters?: string, excludeLetters?: string, positional?: string[] }
 *
 * Returns: State object with the above shape.
 */

export default function wordsReducer(words, action) {
    switch (action.type) {
        case "add":
            // Always return an object with the same structure as the filter case
            const newWords = [...(Array.isArray(words.words) ? words.words : words), action.value];
            return {
                filteredWords: newWords,
                words: newWords,
                excludeLetters: words.excludeLetters || "",
                letters: words.letters || "",
                positionalLetters: words.positionalLetters || []
            };
        case "filter":
            {
                const letters = action.letters?.toLowerCase() || "";
                const excludeLetters = action.excludeLetters?.toLowerCase() || "";
                const positional = Array.isArray(action.positional) ? action.positional : [];

                let filteredWords = words.words;
                [...letters].forEach((c) => {
                    filteredWords = filteredWords.filter(x => x.indexOf(c.toLowerCase()) >= 0);
                });

                for (let i = 0; i < positional.length; i++) {
                    const l = positional[i].trim();
                    if (l !== '') {
                        filteredWords = filteredWords.filter(x => x.indexOf(l.toLowerCase(), i) === i);
                    }
                }

                [...excludeLetters].forEach((c) => {
                    filteredWords = filteredWords.filter(x => x.indexOf(c.toLowerCase()) === -1);
                });

                return {
                    filteredWords: filteredWords,
                    words: words.words,
                    excludeLetters: excludeLetters,
                    letters: letters,
                    positionalLetters: positional
                };
            }
        default:
            throw new Error("Unhandled action " + action.type);
    }
}