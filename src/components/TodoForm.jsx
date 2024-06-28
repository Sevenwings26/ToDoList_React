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
    addTodo(value);
    setValue("");
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <form 
      className="todo-form" 
      onSubmit={handleSubmit} 
      style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "20px" }}
    >
      <input
        type="text"
        className="todo-input"
        placeholder="What is the task today?"
        value={value}
        onChange={handleChange}
        style={{ padding: "10px", fontSize: "16px", marginBottom: "10px", width: "300px" }}
      />
      <button 
        type="submit" 
        className="todo-btn" 
        style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
      >
        Add Task
      </button>
    </form>
  );
};

export default TodoForm;
