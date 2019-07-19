import React from "react";
import {render} from "react-dom";
import TextFieldClass from "./TextFieldClass"

class ClassVersion extends React.Component {
    constructor(){
        super();
    }
    render() {
        console.log("inside parent")
      return (
        <div>
         <h1>Class Component </h1>     
         <TextFieldClass label="first name" name="ayyappa"></TextFieldClass>
         <TextFieldClass label="last name" name="gollu"></TextFieldClass>
      </div>
      )
    }
  }

export default ClassVersion;

render(<ClassVersion/>, document.getElementById("anotherroot"))