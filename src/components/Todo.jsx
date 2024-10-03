import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div
      className="todo"
      style={{
        margin: "10px",
        alignItems: "center",
      }}
    >
      {/* To Cross out completed task */}
      <p
        style={{
          cursor: "pointer",
          textDecoration: task.completed ? "line-through" : "none",
          color: task.completed ? "gray" : "white",
        }}
        onClick={() => toggleComplete(task.id)}
      >
        {task.task}
      </p>

      <div>
        <FontAwesomeIcon
          icon={faPenToSquare}
          style={{ marginRight: "10px", cursor: "pointer" }}
          onClick={() => editTodo(null, task.id)}
        />
        <FontAwesomeIcon
          icon={faTrash}
          style={{ cursor: "pointer" }}
          onClick={() => deleteTodo(task.id)}
        />
      </div>
    </div>
  );
};

export default Todo;
