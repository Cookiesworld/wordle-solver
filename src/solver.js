import React from "react"
import LetterInput from "./letterInput";
import SingleLetterInput from "./singleLetterInput";
import Word from "./word";
import { useWords } from "./wordsContext";

export default function Solver() {

    const { words, dispatch } = useWords();
    let letters = words.letters;
    let excludeLetters = words.excludeLetters;

    const final = [];
    let i = 0;
    for (let letter of words.positionalLetters) {
        final.push(<SingleLetterInput key={i} letter={letter} setLetter={setSingleLetter} position={i} />);
        i++;
    }

    return (
        <section>
            <div className="container">
                <form>
                    <div className="form-row">
                        <LetterInput setLetters={enterLetters} letters={letters} label='Enter Letters'></LetterInput>
                        <LetterInput setLetters={enterExcludeLetters} letters={excludeLetters} label='Enter Letters to exclude'></LetterInput>
                    </div>
                    <div className="form-row">
                        {final}
                    </div>
                </form>
                <h3>Word count {words.filteredWords.length}</h3>
                <div className="row">
                    {words.filteredWords.sort().map(word => <Word key={word} word={word}></Word>)}
                </div>
            </div>
        </section>
    );

    function enterLetters(e) {
        //setLetters(e);
        // reduce the words based on letters
        dispatch({ type: "filter", letters: e, excludeLetters: words.excludeLetters, positional: words.positionalLetters });
    }

    function enterExcludeLetters(e) {
        //setExcludeLetters(e);
        // reduce the words based on letters
        dispatch({ type: "filter", excludeLetters: e, letters: words.letters, positional: words.positionalLetters });
    }

    function setSingleLetter(e, position) {
        words.positionalLetters[position] = e;
        dispatch({ type: "filter", excludeLetters: words.excludeLetters, letters: words.letters, positional: words.positionalLetters });
    }
}


