import React, { useEffect, useState } from 'react'
import './TodoList.css'
import cross from '../../images/icon-cross.svg';
import { useSelector, useDispatch } from 'react-redux';
import { getAllTodos, removeTodos, completeTodos, getAllTodosLength, getCheckedState } from '../../redux/todoSlice';

const TodoList = () => {
  const dispatch = useDispatch();
  const allTodos = useSelector(getAllTodos)
  const length = useSelector(getAllTodosLength)
  const checkboxArr = useSelector(getCheckedState);
  // const isCompleted = useSelector(isComplete)
  const newArr = allTodos.length;
  console.log(newArr, length, checkboxArr);
  const [checked, setChecked] = useState([]); //how to deal with multiple checkboxes

  const handleClick = (id) => {
    console.log('delete', id);
    
    dispatch(removeTodos(id))
  }

  const handleChange = (id, index) => {
    const updateCheckState = checked.map((item, index) => index === id ? !item : item)

    setChecked(updateCheckState);
    dispatch(completeTodos(index))
  }

  useEffect(() => {
    if (length > 0) {
      setChecked(new Array(allTodos.length).fill(false))
    }

    return
  }, [allTodos, length])

  console.log(checked, allTodos);

  return (
    <div className='todolist'>
      {
        Object.keys(allTodos).length === 0 ? <h4>All done!, Well done Elite!</h4> : allTodos.map((todo, index) => (
          <div className='todos' key={todo.id}>
            <label>
              <input id={`custom-checkbox-${index}`} type='checkbox' checked={allTodos[index].complete}  onChange={()=>handleChange(index, todo.id)} />
              <li className={checked[index] ? 'strikethrough' : ''}>{todo.todo}</li>
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