import React from "react"
import {render} from "react-dom";
import FunctionTextField from "./FunctionTextField.js"
import FunctionClock from "./FunctionClock.js"

const FunctionVersion = ()=>{
console.log("inside FuncitonVersion")
    return(
        <div>
           <h1> Functional Component </h1>
           <FunctionClock></FunctionClock>     
           <FunctionTextField label="first name" name="ayyappa"></FunctionTextField>
           <FunctionTextField label="last name" name="gollu"></FunctionTextField>
        </div>
    )
}

render(<FunctionVersion/>, document.getElementById("root"))