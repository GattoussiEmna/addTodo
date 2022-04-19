import React from 'react'
import { useDispatch } from 'react-redux'
import { CheckTodo , DeleteTodo, UpdateTodo } from '../redux/actions'
import EditTodo from './EditTodo'

export const Todo = ({todo , index}) => {

    const dispatch = useDispatch()
    const handleDone = () =>{
        dispatch(CheckTodo({
            id: todo.id

        }))
   
     const handleDelete = () =>{
        dispatch(DeleteTodo({
            id: todo.id

        }))
        
      }


  return (
    <div>
      <div key={todo.id} className="todo-field">
        <div>
          <h2
          style={{ textDecoration : todo.isDone ? 'line-through' : 'none' }}
          >{`${index + 1}/* ${todo.text}`}</h2>
        </div>

        <div className="input-field">
          <button className="check" onClick={handleDone}>
            <i className=" fas fa-check-circle fa-2x "></i>
          </button>
          <button className="trach" onClick={handleDelete}>
            <i className="fas fa-trash-alt fa-2x"></i>
          </button>
          <EditTodo todo ={todo}/>
        </div>
      </div>
    </div>
  );
}
}

