import { withAITracking } from "@microsoft/applicationinsights-react-js";
import React from "react";
import LetterInput from "./letterInput";
import SingleLetterInput from "./singleLetterInput";

import { useWords } from "./context/wordsContext";
import { reactPlugin } from "./appInsights";

const Solver = () => {
  const { words, dispatch } = useWords();
  let letters = words.letters;
  let excludeLetters = words.excludeLetters;

  const final = [];
  let i = 0;
  for (let letter of words.positionalLetters) {
    final.push(
      <SingleLetterInput
        key={i}
        letter={letter}
        setLetter={setSingleLetter}
        position={i}
      />
    );
    i++;
  }

  return (
    <section>
      <div className="container">
        <form>
          <LetterInput
            setLetters={enterLetters}
            letters={letters}
            label="Enter letters"
            maxLength={5}
          ></LetterInput>
          <LetterInput
            setLetters={enterExcludeLetters}
            letters={excludeLetters}
            label="Enter letters to exclude"
            maxLength={26}
          ></LetterInput>

          <div className="input-group ">
            <div className="input-group-prepend">
              <span className="input-group-text">Known Letters</span>
            </div>
            {final}
          </div>
        </form>
      </div>
    </section>
  );

  function enterLetters(e) {
    //setLetters(e);
    // reduce the words based on letters
    dispatch({
      type: "filter",
      letters: e,
      excludeLetters: words.excludeLetters,
      positional: words.positionalLetters,
    });
  }

  function enterExcludeLetters(e) {
    //setExcludeLetters(e);
    // reduce the words based on letters
    dispatch({
      type: "filter",
      excludeLetters: e,
      letters: words.letters,
      positional: words.positionalLetters,
    });
  }

  function setSingleLetter(e, position) {
    words.positionalLetters[position] = e;
    dispatch({
      type: "filter",
      excludeLetters: words.excludeLetters,
      letters: words.letters,
      positional: words.positionalLetters,
    });
  }
};

export default withAITracking(reactPlugin, Solver);
