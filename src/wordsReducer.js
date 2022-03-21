export default function wordsReducer(words, action) {
    switch (action.type) {
        case "add":
            // Return new array with the new item appended
            return [...words, action.value];
        case "filter":
            const letters = action.letters?.toLowerCase() || words.letters;
            const excludeLetters = action.excludeLetters?.toLowerCase() || words.excludeLetters;

            var filteredWords = words.words;
            [...words.letters].forEach((c) => {
                filteredWords = words.words.filter(x => {
                    return x.indexOf(c.toLowerCase()) >= 0
                }
                );
            });

            [...words.excludeLetters].forEach((c) => {
                filteredWords = words.words.filter(x => {
                    return x.indexOf(c.toLowerCase()) === -1
                }
                );
            });

            return { filteredWords: filteredWords, words: words.words, excludeLetters: excludeLetters, letters: letters }

        default:
            throw new Error("Unhandled action " + action.type);
    }
}