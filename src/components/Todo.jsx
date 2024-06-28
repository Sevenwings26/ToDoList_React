// import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
// import { faTrash } from '@fortawesome/free-solid-svg-icons'

// const Todo = ({task}) => {
//   return (
//     <div className='todo' style = {{ border: "1px solid red", margin: "10px", padding: "10px" }}>
//       <p>{task.task}</p>
{
  /* <p
        style={{ cursor: "pointer" }}
        onClick={() => toggleComplete(task.id)}
        className={`${task.completed ? "completed" : ""}`}
      >
        {task.task}
      </p>
       */
}
//         <div>
//             < FontAwesomeIcon icon={faPenToSquare} />
//             < FontAwesomeIcon icon={faTrash} />
//         </div>
//     </div>
//   )
// }

// export default Todo;
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
          onClick={() => editTodo(task.id)}
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
