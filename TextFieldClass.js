import React from "react";

export default class TextFieldClass extends React.Component{
    constructor(props){
        console.log("insdie child constr")
        super(props);
        this.state ={
            label: this.props.label,
            name: this.props.name
        }
    }

    render()
    {
        console.log("inside child")
        return(
            <div>
          <label
              htmlFor="name">
                  {this.state.label}
              </label>
          <input
          id="name"
          value={this.state.name}
          onChange={e=>this.setState({name: e.target.value})}
          > 
          </input>
          </div>
          )        
}
}

// export default TextFieldClass;