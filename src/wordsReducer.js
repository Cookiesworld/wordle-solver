export default function wordsReducer(words, action) {
    switch (action.type) {
        case "empty":
            return [];
        case "add":
            // Return new array with the new item appended
            return [...words, action.value];

        default:
            throw new Error("Unhandled action " + action.type);
    }
}