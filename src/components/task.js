//import { useState } from 'react';
import './task.css'

function Task ({taskProp}) {
  
    return (
      <div className="addedTask">
        <p > {taskProp}</p>
      </div>
    )
}

export default Task;