import React, { useState } from "react"
import Board from "./components/Board"
import "./style.css"

export default function App() {
    const [num, setNum] = useState(0)
    const [num1, setNum1] = useState(0)

    function handleChange(e) {
        e.preventDefault()
        setNum(e.target.value)
    }

    function handleChange1(e) {
        e.preventDefault()
        if (num >= 7) {
            setNum1(num)
            document.getElementById("aa").style.display = "initial"
        } else {
            alert("enter a >= 7 number")
        }
    }

    return (
        <div>
            <form onSubmit={handleChange1}>
                <input type="text" onChange={handleChange} placeholder="enter a >= 7 number"/>
                <input type="submit" value="submit"/>
                <br/>
            </form>
            <div className="game">
                <Board n={num1}/>
            </div>
        </div>
    )
}

