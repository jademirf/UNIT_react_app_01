import { useEffect, useState } from 'react'
import './App.css';
//importar o servico axios "api"
import api from './services/api'

function App() {
  // iniciar um array vazio pra guardar a lista de tasks
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    api.get('todos').then( response => {
      setTasks(response.data)
    })
  }, [])


  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List - React</h1>
      </header>
      <main>
        <ul>
          { 
            tasks.map(task => {
              return (
                <li key={task.id}>
                  <h5>{task.title}</h5>
                  <input type="checkbox" checked={task.completed} />
                </li>
              )
            })
          }
        </ul>
      </main>
    </div>
  );
}

export default App;
