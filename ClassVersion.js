import React from "react";
import {render} from "react-dom";
import ClassTextField from "./ClassTextField.js"
import ClassClock from "./ClassClock.js"

class ClassVersion extends React.Component {
    constructor(){
        super();
    }
    render() {
        console.log("inside parent")
      return (
        <div>
         <h1>Class Component </h1>    
         <ClassClock></ClassClock> 
         <ClassTextField label="first name" name="ayyappa"></ClassTextField>
         <ClassTextField label="last name" name="gollu"></ClassTextField>
      </div>
      )
    }
  }

export default ClassVersion;

render(<ClassVersion/>, document.getElementById("anotherroot"))