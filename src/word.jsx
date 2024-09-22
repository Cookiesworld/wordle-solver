import { Col } from "react-bootstrap";

const Word = ({ word }) => {
  if (!word) {
    return <></>;
  }

  return (
    <Col className="sm" key={word}>
      {word}
    </Col>
  );
};

export default Word;
