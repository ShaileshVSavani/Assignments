import { useState } from "react"
import TaskListComponent from "./TaskListComponent"


const InputComponent = () => {
  const [task, setTask] = useState("")
  const [taskList, setTaskList] = useState([])
  const [errorMessage, setErrorMessage] = useState('');


  const addTaskHandler = () => { 
    if (task === "") {
      setErrorMessage('Please enter a task name');
      alert("Task name is empty")
      return;
    }
    setTaskList([...taskList, {task: task,
      isComplete: false
    }])
    
    setErrorMessage('');
    alert("Task added successfully")
  
  }

  return (
    <>
    <div>
      <input type="text" placeholder="Enter Task" className="input"  onChange={(e) => setTask(e.target.value)} />
      <button className="button" onClick={addTaskHandler} >Add Task</button>
    </div>
      <TaskListComponent taskList={taskList} setTaskList={setTaskList}/>
      <center className="error-message">{ errorMessage}</center>
    </>
  )
}

export default InputComponent