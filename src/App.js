import React, { useState } from "react"
import Board from "./components/Board"
import "./style.css"

function App() {
    const [num, setNum] = useState(0)
    const [num1, setNum1] = useState(0)

    function handleChange(e) {
        e.preventDefault()
        setNum(e.target.value)
    }

    function handleChange1(e) {
        e.preventDefault()
        setNum1(num)
        // document.getElementById("aa").style.display = "none"
    }
    return (
        <div>
            <form id="aa" onSubmit={handleChange1}>
                <input type="text" onChange={handleChange}/>
                <input type="submit" value="submit"/>
                <br/>
            </form>
        <div className="game">
            <Board n={num1}/>
        </div>
        </div>
    )
}

export default App