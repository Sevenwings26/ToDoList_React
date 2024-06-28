import React, { useState } from "react";

const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <form 
      className="edit-todo-form" 
      onSubmit={handleSubmit} 
      style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "20px" }}
    >
      <input
        type="text"
        className="edit-todo-input"
        placeholder="Update task"
        value={value}
        onChange={handleChange}
        style={{ padding: "10px", fontSize: "16px", marginBottom: "10px", width: "300px" }}
      />
      <button 
        type="submit" 
        className="edit-todo-btn" 
        style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
      >
        Update Task
      </button>
    </form>
  );
};

export default EditTodoForm;
