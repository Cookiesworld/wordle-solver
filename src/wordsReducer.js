export default function wordsReducer(words, action) {
    switch (action.type) {
        case "add":
            // Return new array with the new item appended
            return [...words, action.value];
        case "filter":
            const letters = action.letters?.toLowerCase();
            const excludeLetters = action.excludeLetters?.toLowerCase();

            let filteredWords = words.words;
            [...letters].forEach((c) => {
                filteredWords = filteredWords.filter(x => {
                    return x.indexOf(c.toLowerCase()) >= 0
                }
                );
            });

            [...excludeLetters].forEach((c) => {
                filteredWords = filteredWords.filter(x => {
                    return x.indexOf(c.toLowerCase()) === -1
                }
                );
            });

            return { filteredWords: filteredWords, words: words.words, excludeLetters: excludeLetters, letters: letters }

        default:
            throw new Error("Unhandled action " + action.type);
    }
}