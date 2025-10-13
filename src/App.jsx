import React, { useEffect, useState } from 'react'
import TaskForm from './componenets/TaskForm'
import TaskList from './componenets/TaskList'
import ProgressTracker from './componenets/ProgressTracker'


export default function App() {
const [tasks, setTasks] = useState([]);

useEffect(()=>{
  localStorage.setItem("tasks", JSON.stringify(tasks))
}) 

const addTask = (task)=> {
  setTasks([...tasks,task]);
}

  return (
    <div>
      <h1>Taskify</h1>
      <p>Your friendly ask Manager</p>
      <TaskForm addTask={addTask}/>
      <TaskList tasks={tasks} updateTask={updateTask} delete={deleteTask}/>
      <ProgressTracker />
      <button>Clear all Task</button>
    </div>
  )
}
