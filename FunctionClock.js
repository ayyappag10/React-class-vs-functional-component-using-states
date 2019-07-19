import React, {useState, useEffect} from "react"
import {render} from "react-dom"

const FunctionClock= ()=>{

    const [date, setDate] = useState(new Date())

    useEffect(
        ()=>{
            setInterval(
                setDate(
                new Date()
            ))
        }
    )

    return(
        <div>
            <h1>Hello world</h1>
            <h2>it is {date.toLocaleTimeString()}</h2>
        </div>
    )
}

export default FunctionClock;