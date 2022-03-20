import React, { useState } from 'react'
import './TodoList.css'
import cross from '../../images/icon-cross.svg';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodos, completeTodos, getAllCheckBoxes } from '../../redux/todoSlice';

const TodoList = () => {
  const dispatch = useDispatch();
  let newCheckboxArr = useSelector(getAllCheckBoxes)
  const [active, setActive] = useState('');

  const allTodos = useSelector((state) => {
    const todos = state.todos.todos
    if (active === 'active') {
      newCheckboxArr = newCheckboxArr.map((check, index) => newCheckboxArr[index] !== true ? check : null)

      return todos.filter((todo, index) => newCheckboxArr[index] === false)
    } else if (active === 'complete') {
      newCheckboxArr = newCheckboxArr.map((check, index) => newCheckboxArr[index] !== false ? check : null)

      return todos.filter((todo, index) => newCheckboxArr[index] === true)
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
    console.log('all');
    setActive('');
  }

  const handleActiveClick = () => {
    setActive('active')
  }

  const handleCompleteClick = () => {
    setActive('complete')
  }

  return (
    <div className='todolist'>
      {
        Object.keys(allTodos).length === 0 ? <h4>Keep building, keep pushing Elite!</h4> : allTodos.map((todo, index) => (
          <div className='todos' key={todo.id}>
            <label>
              <input id={`custom-checkbox-${index}`} type='checkbox' checked={newCheckboxArr[index]} onChange={active === '' ? ()=>handleChange(index) : null} />
              <li className={newCheckboxArr[index] ? 'strikethrough' : ''}>{todo.todo}</li>
              <span className='checkmark'></span>
            </label>
            <img src={cross} alt='check todos' onClick={active === '' ? () => handleClick(index) : null} />
          </div>
        ))
        }
      <div className='filter'>
        <span>{allTodos.length} items left</span>
        <div className='filter-tasks'>
          <button className='filter-btn active' onClick={handleAllClick}>All</button>
          <button className='filter-btn' onClick={handleActiveClick}>Active</button>
          <button className='filter-btn' onClick={handleCompleteClick}>Completed</button>
        </div>
        <button className='filter-btn'>Clear Completed</button>
      </div>
      <p className='info'>Drag and drop to reorder list</p>
    </div>
  )
}

export default TodoList