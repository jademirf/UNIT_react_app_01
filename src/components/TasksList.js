import React, { useEffect, useState } from 'react'
//importar o servico axios "api"
import api from '../services/api'
import TaskCard from './TaskCard'

const TasksList = () => {
  // iniciar um array vazio pra guardar a lista de tasks
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    api.get('todos').then( response => {
      setTasks(response.data)
    })
  }, [])

  return (
    <main>
      <div>
        { 
          tasks.map(task => {
            return (
              <TaskCard task={task} />
            )
          })
        }
      </div>
    </main>
  )
}

export default TasksList