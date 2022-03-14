import './App.css';
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';
import sun from './images/icon-sun.svg';

function App() {
  return (
    <div className="App">
      <div className='app-header-bg'>
        <h1>TODO</h1>
        <img src={sun} alt='theme'/>
      </div>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
