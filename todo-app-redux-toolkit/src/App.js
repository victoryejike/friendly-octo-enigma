import './App.css';
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';
import sun from './images/icon-sun.svg';

function App() {
  const todos = [
    {
      id: 1,
      todo: 'Jog around the park 3x'
    },
    {
      id: 2,
      todo: '10 minutes meditation'
    },
    {
      id: 3,
      todo: 'Read for 1 hour'
    },
    {
      id: 4,
      todo: 'Pick up groceries'
    },
    {
      id: 5,
      todo: 'Complete Todo App'
    }
  ]

  return (
    <div className="App">
      <div className='app-header-bg'>
        <h1>TODO</h1>
        <img src={sun} alt='theme'/>
      </div>
      <AddTodo />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
