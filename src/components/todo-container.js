import './todo-container.css'
import Task from './task'
import { useState } from 'react';




function TodoContainer () {
  const [task, setTask] = useState('')
  const [show, showTask] = useState(false)

  const updateTask = (e) => {setTask(e.target.value)}
    return (
    <div>
        <div className="TodoContainer">
            <h3>New task: </h3>
            <input className="formInput" value={task} size="100" onChange={updateTask} />
            <button className="Add" onClick={showNewTask}> Add </button>
        </div>
        {show ? <Task taskProp = {task}/> : null}
    </div>
    )


    function showNewTask(){
        showTask(true)
    }
    

  }
 

  export default TodoContainer;