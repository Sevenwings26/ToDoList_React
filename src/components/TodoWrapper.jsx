// import React, { useState } from "react";
// import "./css/style.css";
// import TodoForm from "./TodoForm";
// import { v4 as uuidv4 } from "uuid";
// import Todo from "./Todo";
// uuidv4();

// function TodoWrapper() {
//   const [todos, setTodos] = useState([]);

//   const addTodo = (todo) => {
//     setTodos([
//       ...todos,
//       { id: uuidv4(), task: todo, completed: false, inEditing: false },
//     ]);
//     console.log(todos)
//   };

//   return (
//     <div className="todo-wrapper">
//       <TodoForm addTodo={addTodo} />
//       {/* To Generate a todo for each value and state  */}
//       {todos.map((todo, index) => {
//         <Todo task={todo} key={index} />
//       })}
//       {/* < Todo/> */}
//     </div>
//   );
// }

// export default TodoWrapper;

import React, { useState } from "react";
import "./css/style.css";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";

uuidv4();

function TodoWrapper() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: uuidv4(), task: todo, completed: false, inEditing: false },
    ]);
    // console.log("Added todo:", todo);
    // console.log("Current todos:", todos);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? {...todo, completed: !todo.completed } : todo
      )
    );
  };

  // const deleteTodo = () => {}

  return (
    <div
      className="todo-wrapper"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "20px",
      }}
    >
      <h1>Get things done</h1>
      <TodoForm addTodo={addTodo} />
      {/* To Generate a todo for each value and state */}
      {todos.map((todo) => (
        <Todo task={todo} key={todo.id}
         toggleComplete={toggleComplete} 
        //  deleteTodo={deleteTodo}
         />
      ))}
    </div>
  );
}

export default TodoWrapper;
