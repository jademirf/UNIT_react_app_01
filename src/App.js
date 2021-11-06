import logo from './logo.svg';
import { useEffect } from 'react'
import './App.css';
//importar o servico axios "api"
import api from './services/api'

function App() {
  useEffect(() => {
    api.get('todos').then( response => {
      console.log(response.data)
    })
  }, [])


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
