import React, { useState } from 'react'
import './TodoList.css'
import cross from '../../images/icon-cross.svg';
import { useSelector, useDispatch } from 'react-redux';
import { getAllTodos, removeTodos } from '../../redux/todoSlice';

const TodoList = ({ todos }) => {
  const dispatch = useDispatch();
  const allTodos = useSelector(getAllTodos)
  console.log(allTodos)
  // const [activeColor, setActiveColor] = useState(false);
  const [checked, setChecked] = useState(new Array(allTodos.length).fill(false)); //how to deal with multiple checkboxes

  const handleClick = (id) => {
    console.log('delete', id);
    
    dispatch(removeTodos(id))
  }

  const handleChange = (id) => {
    const updateCheckState = checked.map((item, index) => index === id ? !item : item)

    setChecked(updateCheckState);
  }

  return (
    <div className='todolist'>
      {
        allTodos.map((todo, index) => (
          <div className='todos' key={todo.id}>
            <label>
              <input id={`custom-checkbox-${index}`} type='checkbox' checked={checked[index]} onChange={()=>handleChange(index)} />
              <li>{todo.todo}</li>
              <span className='checkmark'></span>
            </label>
            <img src={cross} alt='check todos' onClick={() => handleClick(todo.id)} />
          </div>
        ))
        }
      <div className='filter'>
        <span>{allTodos.length} items left</span>
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