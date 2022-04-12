import React from "react"
import LetterInput from "./letterInput";
import SingleLetterInput from "./singleLetterInput";
import Word from "./word";
import { useWords } from "./wordsContext";

export default function Solver() {

    const { words, dispatch } = useWords();
    let letters = words.letters;
    let excludeLetters = words.excludeLetters;
    return (
        <section>
            <div class="container">
                <form>
                    <LetterInput setLetters={enterLetters} letters={letters} label='Enter Letters'></LetterInput>
                    <LetterInput setLetters={enterExcludeLetters} letters={excludeLetters} label='Enter Letters to exclude'></LetterInput>
                    <div className="row">
                        <SingleLetterInput letter={words.positionalLetters[0]} setLetter={setSingleLetter} />
                        <SingleLetterInput letter={words.positionalLetters[1]} setLetter={setSingleLetter} />
                        <SingleLetterInput letter={words.positionalLetters[2]} setLetter={setSingleLetter} />
                        <SingleLetterInput letter={words.positionalLetters[3]} setLetter={setSingleLetter} />
                        <SingleLetterInput letter={words.positionalLetters[4]} setLetter={setSingleLetter} />
                    </div>
                </form>
                <h3>Word count {words.filteredWords.length}</h3>
                <div className="row">

                    {words.filteredWords.sort().map(word => <Word word={word}></Word>)}

                </div>
            </div>
        </section>
    );

    function enterLetters(e) {
        //setLetters(e);
        // reduce the words based on letters
        dispatch({ type: "filter", letters: e, excludeLetters: words.excludeLetters });
    }

    function enterExcludeLetters(e) {
        //setExcludeLetters(e);
        // reduce the words based on letters
        dispatch({ type: "filter", excludeLetters: e, letters: words.letters });
    }

    function setSingleLetter(e) {
        alert(e);
    }
}


