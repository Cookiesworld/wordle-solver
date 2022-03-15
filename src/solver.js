import React, { useState } from "react"
import MyForm from "./myForm";
import { useWords } from "./wordsContext";

export default function Solver() {
    const [letters, setLetters] = useState('');
    const [excludeletters, setExcludeLetters] = useState('');
    const { words, dispatch } = useWords();

    return (
        <section>
            <MyForm setLetters={enterLetters} letters={letters} label='Enter Letters'></MyForm>
            <MyForm setLetters={enterExcludeLetters} letters={excludeletters} label='Enter Letters to exclude'></MyForm>

            <h3>Word count {words.length}</h3>
            {words.sort().map(word => <div key={word}>{word}</div>)}

        </section>
    );

    function enterLetters(e) {
        setLetters(e);
        // reduce the words based on letters
        dispatch({ type: "filter", letters: e });
    }

    function enterExcludeLetters(e) {
        setExcludeLetters(e);
        // reduce the words based on letters
        dispatch({ type: "exclude", letters: e });
    }
}


