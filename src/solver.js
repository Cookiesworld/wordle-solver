import React, { useState } from "react"
import MyForm from "./myForm";
import { useWords } from "./wordsContext";

export default function Solver() {
    const [letters, setLetters] = useState('');
    const { words } = useWords();

    return (
        <section>
            <MyForm setLetters={enterLetters} letters={letters}></MyForm>

            {words.map(word => <div>{word}</div>)}

        </section>
    );

    function enterLetters(e) {
        setLetters(e);
        // reduce the words based on letters
    }
}


