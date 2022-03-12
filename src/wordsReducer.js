export default function wordsReducer(words, action) {
    switch (action.type) {
        case "empty":
            return [];
        case "add":
            // Return new array with the new item appended
            return [...words, action.value];
        case "filter":
            var filteredWords = words;
            [...action.letters].forEach((c) => {
                filteredWords = words.filter(x => {
                    return x.indexOf(c) >= 0
                }
                );
            });

            return filteredWords;
        case "exclude":
            var excludedWords = words;
            [...action.letters].forEach((c) => {
                excludedWords = words.filter(x => {
                    return x.indexOf(c) === -1
                }
                );
            });

            return excludedWords;

        default:
            throw new Error("Unhandled action " + action.type);
    }
}