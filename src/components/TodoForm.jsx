// import React, { useState } from "react";

// const TodoForm = ({ addTodo }) => {
//   const [value, setValue] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     addTodo(value);
//     setValue("");
//   };

//   const handleChange = (e) => {
//     setValue(e.target.value);
//   };

//   return (
//     <form className="todo-form" onSubmit={handleSubmit}>
//       <input
//         type="text"
//         className="todo-input"
//         placeholder="What is the task today?"
//         onChange={handleChange}
//       />
//       <button type="submit" className="todo-btn">
//         Add Task
//       </button>
//     </form>
//   );
// }

// export default TodoForm

import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    value ? addTodo(value) : "";
    setValue("");
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <form
      className="todo-form"
      onSubmit={handleSubmit}
      // style={{
      //   alignItems: "center",
      //   margin: "20px",
      // }}
    >
      <input
        type="text"
        className="todo-input"
        placeholder="What is the task today?"
        value={value}
        onChange={handleChange}
      />
      <button type="submit" className="todo-btn" >
        Add Task
      </button>
    </form>
  );
};

export default TodoForm;
