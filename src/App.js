import React from "react";
import "./App.css";
import FormTodo from "./Components/FormTodo";
import {TodoList} from "./Components/TodoList";

const App = () => {
  return (
    <>
      <div className="App">
        <div className="container">
          <FormTodo />
           <TodoList /> 
        </div>
      </div>
    </>
  );
};

export default App;
