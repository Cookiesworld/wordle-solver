import React from "react"

export default function word({ word, letters }) {

    return (
        <div className="sm" key={word}>{word}</div>
    )
}