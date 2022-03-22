import React from "react"

export default function word({ word }) {

    return (
        <div className="col-sm-1" key={word}>{word}</div>

    )
}