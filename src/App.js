import './App.css';
import Header from './components/Header'
import TasksList from './components/TasksList'
import FooterMenu from './components/FooterMenu'

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
      <FooterMenu/>
    </div>
  );
}

export default App;
