import React from 'react'

const TaskCard = ({task}) => {
  return (
    <div className="taskCard" key={task.id}>
      <h5>{task.title}</h5>
      <input type="checkbox" checked={task.completed} />
    </div>
  )
}

export default TaskCard