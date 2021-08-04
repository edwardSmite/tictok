import React from "react"
import Square from "./Square"

export default function Board(props) {
    function renderSquare(i) {
        return (
            <Square 
                value=""
                onClick={() => console.log(i)}
                key={i}
            />
        )
    }

    var b = []
    for (let i = 0; i < props.n; i++) {
        var c = []
        for (let j = 0; j < props.n; j++) {
            c.push(
                renderSquare(i * props.n + j)
            )
        }
        b.push(
            <div className="board-row" key={i}>
                {c}
            </div>
        )
    }
    return (
        <div className="board">
            {b}
        </div>
    )
}

