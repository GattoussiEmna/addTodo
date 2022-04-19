import React from 'react'
import {useSelector} from "react-redux"
import {Todo} from './Todo'

export const TodoList = () => {

    const todos = useSelector ((state)=>state.todoReducer.todos)

    

  return (

    <div>
        {
            todos.map((todo , index)=>
            <Todo todo={todo} index={index} key={index} />
            )
        }

    </div>

  );
};

