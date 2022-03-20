import React, { useState } from 'react'
import './TodoList.css'
import cross from '../../images/icon-cross.svg';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodos, completeTodos, filterTodos } from '../../redux/todoSlice';

const TodoList = () => {
  const dispatch = useDispatch();
  const [active, setActive] = useState('');

  const allTodos = useSelector((state) => {
    const todos = state.todos.todos
    if (active === 'active') {
      return todos.filter((todo) => todo.complete === false)
    } else if (active === 'complete') {
      return todos.filter((todo) => todo.complete === true)
    } else if (active === '') {
      return todos;
    }
  })

  // const [checked, setChecked] = useState([]); //how to deal with multiple checkboxes

  const handleClick = (id) => {
    dispatch(removeTodos(id))
  }

  const handleChange = (id) => {
    dispatch(completeTodos(id))
  }

  const handleAllClick = () => {
    setActive('');
  }

  const handleActiveClick = () => {
    setActive('active')
  }

  const handleCompleteClick = () => {
    setActive('complete')
  }

  const handleFilterClick = () => {
    dispatch(filterTodos())
  }

  return (
    <div className='todolist'>
      {
        Object.keys(allTodos).length === 0 ? <h4>{active === 'complete' ? 'None completed so far, keep going': active === 'active' ? 'Well done, All done' : active === '' ? 'Keep building, keep pushing Elite!' : ''}</h4> : allTodos.map((todo, index) => (
          <div className='todos' key={todo.id}>
            <label>
              <input id={`custom-checkbox-${index}`} type='checkbox' checked={todo.complete} onChange={()=>handleChange(todo.id)} />
              <li className={todo.complete ? 'strikethrough' : ''}>{todo.todo}</li>
              <span className='checkmark'></span>
            </label>
            <img src={cross} alt='check todos' onClick={() => handleClick(todo.id)} />
          </div>
        ))
        }
      <div className='filter'>
        <span>{allTodos.length} {active === 'active' ? 'item(s) left' : active === 'complete' ? 'items completed' : active === '' ? 'todo item(s) added' : ''}</span>
        <div className='filter-tasks'>
          <button className={`filter-btn ${active === '' ? 'active' : ''}`} onClick={handleAllClick}>All</button>
          <button className='filter-btn' onClick={handleActiveClick}>Active</button>
          <button className='filter-btn' onClick={handleCompleteClick}>Completed</button>
        </div>
        <button className='filter-btn' onClick={handleFilterClick}>Clear Completed</button>
      </div>
      <p className='info'>Drag and drop to reorder list</p>
    </div>
  )
}

export default TodoList