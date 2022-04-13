import React from "react"

export default function word({ word }) {

    return (
        <div className="col-sm" key={word}>{word}</div>

    )
}