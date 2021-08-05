import React, { useEffect, useState } from "react"
import Square from "./Square"

export default function Board(props) {
    const [xTurn, setXTurn] = useState(true)
    const [squares, setSquares] = useState([])

    useEffect(() => {
        setSquares([])
    }, [props.n])

    function renderSquare(i) {
        function sthing(id) {            
            var newSquares = squares
            if (typeof newSquares[id] === "undefined") {
                setXTurn(!xTurn)
                newSquares[id] = xTurn ? "X" : "O"
            } 
            setSquares([...newSquares])
        }
        return (
            <Square 
                value={squares[i]}
                onClick={() => {sthing(i)}}
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
        <div>
            <h1 id="aa">Current: {xTurn ? "X" : "O"}</h1><br/><br/>
            <div className="board">
                {b}
            </div>
        </div>
    )
}

