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
        document.getElementById("aa").style.display = "initial"
    }
    return (
        <div>
            <form onSubmit={handleChange1}>
                <input type="text" onChange={handleChange}/>
                <br/>
            </form>
            <Board n={num1}/>
        </div>
    )
}

export default App