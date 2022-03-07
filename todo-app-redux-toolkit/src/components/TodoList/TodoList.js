import React, { useState } from 'react'
import './TodoList.css'
import cross from '../../images/icon-cross.svg';

const TodoList = ({ todos }) => {
  // const [activeColor, setActiveColor] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    console.log('delete');
  }

  const handleChange = (id, i) => {
    console.log(id, i)
    if (id === i) {
      setChecked(!checked);
    }
  }

  console.log(checked);

  return (
    <div className='todolist'>
      {
        todos.map((todo, i) => (
          <div className='todos' key={todo.id}>
            <label>
              <input type='checkbox' checked={checked} onChange={()=>handleChange(todo.id, (i+1))} />
              <li>{todo.todo}</li>
            </label>
            <img src={cross} alt='check todos' onClick={handleClick} />
          </div>
        ))
      }
      <div className='filter'>
        <span>5 items left</span>
        <div className='filter-tasks'>
          <button className='filter-btn active'>All</button>
          <button className='filter-btn'>Active</button>
          <button className='filter-btn'>Completed</button>
        </div>
        <button className='filter-btn'>Clear Completed</button>
      </div>
      <p className='info'>Drag and drop to reorder list</p>
    </div>
  )
}

export default TodoList