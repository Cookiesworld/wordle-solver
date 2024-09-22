import { useWords } from "./context/wordsContext";
import Word from "./word";
import { Row } from "react-bootstrap";

const Words = () => {
  const { words } = useWords();
  const sortedWords = words.filteredWords.sort();

  const rows = [...Array(Math.ceil(sortedWords.length / 6))];
  // chunk the products into the array of rows
  const wordRow = rows.map((row, idx) =>
    sortedWords.slice(idx * 6, idx * 6 + 6)
  );

  // map the rows as row
  const content = wordRow.map((row, idx) => (
    <Row key={idx}>
      {row.map((word) => (
        <Word key={word} word={word} letters={words.letters}></Word>
      ))}
    </Row>
  ));

  return (
    <section>
      <h3>Word count {words.filteredWords.length}</h3>
      {content}
    </section>
  );
};

export default Words;
