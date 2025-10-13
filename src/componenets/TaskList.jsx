import React from 'react'

export default function TaskList({tasks},{updateTask},{deleteTask}) {
  return (
    <div>
      <ul>
        {tasks.map((task, index) => {
          <li>
            <div>
              {task.text}
              <small>{task.priority}, {task.category}</small>
            </div>
            
            <div>
              <button>complete</button>
              <button>Delete</button>
            </div>
          </li>
        })}
      </ul>
    </div>
  )
}
