import React from 'react'
import TaskForm from './componenets/TaskForm'
import TaskList from './componenets/TaskList'
import ProgressTracker from './componenets/ProgressTracker'

export default function App() {
  return (
    <div>
      <h1>Taskify</h1>
      <p>Your friendly ask Manager</p>
      <TaskForm />
      <TaskList />
      <ProgressTracker />
      <button>Clear all Task</button>
    </div>
  )
}
