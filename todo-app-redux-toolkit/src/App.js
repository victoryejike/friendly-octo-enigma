import './App.css';
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';
import DarkMode from './components/DarkMode/DarkMode';

function App() {
  return (
    <div className="App">
      <div className='app-header-bg'>
        <h1>TODO</h1>
        <DarkMode />
      </div>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
