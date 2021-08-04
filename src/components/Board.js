import React, { useEffect, useState } from "react"
import Square from "./Square"

export default function Board(props) {
    const [xTurn, setXTurn] = useState(true);
    const [squares, setSquares] = useState([]);

    useEffect(() => {
        setSquares([]);
    }, [props.n])

    function renderSquare(i) {
        function mark(id) {
            setXTurn(!xTurn);
            var newSquares = squares;
            if (typeof newSquares[id] === 'undefined') {
                newSquares[id] = xTurn ? "X" : "O";
            }
            setSquares([...newSquares])
        }

        return (
            <Square 
                value={squares[i]}
                onClick={() => {mark(i)}}
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
            <div className="board-row" key={i}>{c}</div>
        )
    }
    return (
        <div className="board">{b}</div>
    )
}

