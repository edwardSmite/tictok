import React, { useEffect, useState } from "react"
import Square from "./Square"

export default function Board(props) {
    const [xTurn, setXTurn] = useState(true)
    const [squares, setSquares] = useState([])
    const [win, setWin] = useState(false)

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

            function checkPath(id) {
                var satisfied = false
                var i = id / props.n
                var j = id % props.n
                const add = [-1, 0, 1]

                for (let a in add) {
                    for (let b in add) {
                        if (a * b !== 0) {
                            if (squares[(i + a) * props.n + (j + b)] === squares[id]) {
                                if (squares[(i - a) * props.n + (j - b)] !== squares[id]) {
                                    if (squares[(i + 2 * a) * props.n + (j + 2 * b)] === squares[id]) {
                                        if (squares[(i + 3 * a) * props.n + (j + 3 * b)] === squares[id]) {
                                            if (squares[(i + 4 * a) * props.n + (j + 4 * b)] === squares[id]) {
                                                satisfied = true
                                            } else {break}
                                        } else {break}
                                    } else {break}
                                } else {
                                    if (squares[(i + 2 * a) * props.n + (j + 2 * b)] === squares[id] && squares[(i - 2 * a) * props.n + (j - 2 * b)] === squares[id]) {
                                        satisfied = true
                                    } else if (squares[(i + 2 * a) * props.n + (j + 2 * b)] === squares[id] && squares[(i + 3 * a) * props.n + (j + 3 * b)] === squares[id]) {
                                        satisfied = true
                                    } else if (squares[(i - 2 * a) * props.n + (j - 2 * b)] === squares[id] && squares[(i - 3 * a) * props.n + (j - 3 * b)] === squares[id]) {
                                        satisfied = true
                                    } else {break}
                                }
                            } else {break}
                        } 
                    }
                }
                setWin(satisfied)
                console.log(win)
            }
            checkPath(id)
        }

        return (
            <Square 
                value={squares[i]}
                onClick={() => {
                    sthing(i)
                }}
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

    var indi = !win ? <div><h1 id="aa">Current: {xTurn ? "X" : "O"}</h1><br/><br/></div> : <div><h1>Winner: {xTurn ? "X" : "O"}</h1></div>

    return (
        <div>
            {indi}
            <div className="board">
                {b}
            </div>
        </div>
    )
}

