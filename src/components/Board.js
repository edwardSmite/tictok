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
                const dx = [0, 1, 1, 1, 0, -1, -1, -1];
                const dy = [-1, 0, 1, -1, 1, 0, -1, 1];
                let count = [0, 0, 0, 0, 0, 0, 0, 0];

                for (let k = 0; k < 8; k++) {
                    let newRow = Math.floor(id / props.n);
                    let newColumn = id % props.n;
                    while (count[k] < 5) {
                        newRow = newRow + dx[k];
                        newColumn = newColumn + dy[k];
                        let newId = newRow * props.n + newColumn;

                        if (newRow < 0 || newColumn < 0 || newRow >= props.n || newColumn >= props.n || squares[newId] !== squares[id]) {
                            break;
                        } else {
                            count[k]++;
                        }
                    }
                }                
                
                for (let k = 0; k < 4; k++) {
                    if (count[k] + count[k + 4] >= 4) {
                        satisfied = true;
                        break;
                    }
                }

                setWin(satisfied)
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

    var indi = !win ? <h1 id="aa">Current: {xTurn ? "X" : "O"}</h1> : <h1>Winner: {!xTurn ? "X" : "O"}</h1>;

    return (
        <div>
            {indi}
            <br/><br/>
            <div className="board">
                {b}
            </div>
        </div>
    )
}

