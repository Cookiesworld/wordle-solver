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

            for (let i = 0; i < action.positional.length; i++) {
                const l = action.positional[i].trim();
                if (l !== '') {
                    filteredWords = filteredWords.filter(x => {
                        return x.indexOf(l.toLowerCase(), i) === i
                    });
                }
            }

            [...excludeLetters].forEach((c) => {
                filteredWords = filteredWords.filter(x => {
                    return x.indexOf(c.toLowerCase()) === -1
                }
                );
            });

            return { filteredWords: filteredWords, words: words.words, excludeLetters: excludeLetters, letters: letters, positionalLetters: action.positional }

        default:
            throw new Error("Unhandled action " + action.type);
    }
}