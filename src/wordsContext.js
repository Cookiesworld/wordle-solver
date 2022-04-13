import React, { useContext, useReducer } from "react";
import wordsReducer from "./wordsReducer";
import valid from './words.json';

const WordsContext = React.createContext(null);

let initialValid = {
    words: valid,
    letters: '',
    excludeLetters: '',
    filteredWords: valid,
    positionalLetters: ['', '', '', '', '']
}

export function WordsProvider(props) {
    const [words, dispatch] = useReducer(wordsReducer, initialValid);

    const contextValue = {
        words,
        dispatch
    };

    return <WordsContext.Provider value={contextValue}>
        {props.children}
    </WordsContext.Provider>
}

export function useWords() {
    const context = useContext(WordsContext);
    if (!context) {
        throw new Error("Use words must be used within a words provider");
    }
    return context;
}