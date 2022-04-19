import React, {useState} from "react";
import {useDispatch} from 'react-redux';
import { addTodo } from "../redux/actions";

const FormTodo = () =>{
    const [textInput, setTextInput]=useState('')
    const handleChange = e =>{
        setTextInput(e.target.value)
    }
     const dispatch = useDispatch()
     const handleClick = e =>{
         e.preventDefault()
         dispatch(addTodo({
             text:textInput

    
         }))
         setTextInput('')

     }
    return(
        <form className="form">
    <input
className="input-add"
type="text"
placeholder="Write your Todos !"
required
onChange={handleChange}
value={textInput}
/>
    <button  className="My-btn" >
    </button>
        </form>
    );

};
export default FormTodo