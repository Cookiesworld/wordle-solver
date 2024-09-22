import React from "react";
import { Col } from "react-bootstrap";

const Word = ({ word }) => {
  return (
    <Col className="sm" key={word}>
      {word}
    </Col>
  );
};

export default Word;
