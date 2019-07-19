import React, {useState, useEffect} from "react"

const FunctionTextField = (props)=>{
    const [name, setName] = useState(props.name);
    useEffect(
        ()=>{
            console.log("inside useaffect")
        }
    )
    console.log("inside function textfield")
    return(
        <div>     
            <label htmlFor="name">{props.label}</label>       
            <input
             id="name"
             value={name}
             onChange= {e=>setName(e.target.value)}
             >
            </input>
        </div>
    )
}

export default FunctionTextField;