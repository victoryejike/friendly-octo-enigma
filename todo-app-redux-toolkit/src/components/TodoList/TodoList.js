import React, { useState } from 'react'
import './TodoList.css'
import cross from '../../images/icon-cross.svg';
import { useSelector, useDispatch } from 'react-redux';
import { getAllTodos, removeTodos, completeTodos, getAllCheckBoxes } from '../../redux/todoSlice';

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector(getAllTodos)
  const newCheckboxArr = useSelector(getAllCheckBoxes)

  const [active, setActive] = useState(false);

  const allTodos = () => {
    if (active === true) todos.map((todo, index) => newCheckboxArr[index] === false ? todo : null)
    return todos;
  }

  // const [checked, setChecked] = useState([]); //how to deal with multiple checkboxes

  const handleClick = (id) => {
    dispatch(removeTodos(id))
  }

  const handleChange = (id) => {
    dispatch(completeTodos(id))
  }

  const handleAllClick = () => {
    console.log('all');
    return allTodos
  }

  const handleActiveClick = () => {
    setActive(!active);
    // console.log('active', newCheckboxArr);
    // return allTodos = allTodos.map((todo, index) => newCheckboxArr[index] === false ? todo : null)
    // console.log(allTodos)
  }

  const handleCompleteClick = () => {
    console.log('complete');
    // allTodos = allTodos;
  }

  return (
    <div className='todolist'>
      {
        Object.keys(todos).length === 0 ? <h4>Keep building, keep pushing Elite!</h4> : todos.map((todo, index) => (
          <div className='todos' key={todo.id}>
            <label>
              <input id={`custom-checkbox-${index}`} type='checkbox' checked={newCheckboxArr[index]}  onChange={()=>handleChange(index)} />
              <li className={newCheckboxArr[index] ? 'strikethrough' : ''}>{todo.todo}</li>
              <span className='checkmark'></span>
            </label>
            <img src={cross} alt='check todos' onClick={() => handleClick(index)} />
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