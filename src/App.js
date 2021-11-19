import './App.css';
import Header from './components/Header'
import TasksList from './components/TasksList'

function App() {

  const user = {
    id: 1,
    name: 'Jademir',
    lastName: 'Filho'
  }

  return (
    <div className="App">
      <Header listTitle={'Estudos'} user={user}/>
      <TasksList />
    </div>
  );
}

export default App;
