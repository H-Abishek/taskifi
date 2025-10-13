import React, { useState } from 'react'

export default function TaskForm({addTask}) {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [category, setCategory] = useState('General');

  const handlesubmit = (e) => {
    e.preventDefault();
    addTask({text: task, priority, category, completed: false});
    setTask('');
    setPriority('Medium');
    setCategory('General')
  }

  return (
    <div>
      <form onSubmit={handlesubmit} id='task-form' >
          <div id='inp'>
              <input type="text" placeholder='Enter the task' value={task}
              onChange={(e) => setTask(e.target.value)}/>
              <span><button type='submit'>Add task</button></span>
              
          </div>

          <div id='btn'>
              <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
              
              <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="General">General</option>
                <option value="Work">Work</option>
                <option value="Personal">Personal</option>
              </select>
          </div>
          {/* <h2> {task} {priority} {category}</h2> */}
         
      </form>
    </div>
  )
}
