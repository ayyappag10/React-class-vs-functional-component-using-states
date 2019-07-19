import React from "react"
import {render} from "react-dom";
import TextFieldFunction from "./TextFieldFunction.js"

const FunctionVersion = ()=>{
console.log("inside FuncitonVersion")
    return(
        <div>
           <h1> Functional Component </h1>     
           <TextFieldFunction label="first name" name="ayyappa"></TextFieldFunction>
           <TextFieldFunction label="last name" name="gollu"></TextFieldFunction>
        </div>
    )
}

render(<FunctionVersion/>, document.getElementById("root"))