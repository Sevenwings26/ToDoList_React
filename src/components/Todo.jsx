// import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
// import { faTrash } from '@fortawesome/free-solid-svg-icons'

// const Todo = ({task}) => {
//   return (
//     <div className='todo' style = {{ border: "1px solid red", margin: "10px", padding: "10px" }}>
//       <p>{task.task}</p>
//         <div>
//             < FontAwesomeIcon icon={faPenToSquare} />
//             < FontAwesomeIcon icon={faTrash} />
//         </div>
//     </div>
//   )
// }

// export default Todo;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Todo = ({ task }) => {
  return (
    <div 
      className='todo' 
      style={{ 
        border: "1px solid red", 
        margin: "10px", 
        padding: "10px", 
        width: "300px", 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center" 
      }}
    >
        <p style={{ margin: "0" }}>{task.task}</p>
        <div>
            <FontAwesomeIcon icon={faPenToSquare} style={{ marginRight: "10px", cursor: "pointer" }} />
            <FontAwesomeIcon icon={faTrash} style={{ cursor: "pointer" }} />
        </div>
    </div>
  );
};

export default Todo;