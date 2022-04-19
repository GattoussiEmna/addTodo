import { ADD_TODO, CHECK_TODO , DELETE_TODO, UPDATE_TODO } from "../constants/action-types";

export const addTodo = (payload) =>{
    return{
        type: ADD_TODO ,
        payload
    }
}

export const CheckTodo = (payload) => {
  return {
    type: CHECK_TODO,
    payload,
  };
};

export const DeleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

  export const UpdateTodo = (payload) => {
  return {
    type: UPDATE_TODO,
    payload,
  };
};
