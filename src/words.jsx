import { useWords } from "./context/wordsContext";
import Word from "./word";
import { Row } from "react-bootstrap";

const Words = () => {
  const { words } = useWords();

  return (
    <section>
      <h3>Word count {words.filteredWords.length}</h3>
      <Row>
        {words.filteredWords.sort().map((word) => (
          <Word key={word} word={word} letters={words.letters}></Word>
        ))}
      </Row>
    </section>
  );
};

export default Words;
