import React from "react"
import { Col } from "react-bootstrap"

export default function word({ word }) {

    return (
        <Col className="sm" key={word}>{word}</Col>
    )
}