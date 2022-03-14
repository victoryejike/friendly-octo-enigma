import React, { useState } from 'react'
import './AddTodo.css';
import { addTodos } from '../../redux/todoSlice';
import { useDispatch } from 'react-redux';

const AddTodo = () => {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todo === '') alert('please add a new task');

    dispatch(addTodos({id: Math.floor(Math.random() * 1000) * 1 , todo: todo}));

    setTodo('');
  }

  return (
    <form onSubmit={handleSubmit} className='addtodo'>
      <input className='input' type='text' placeholder='Create a new todo' onChange={(e) => setTodo(e.target.value)} value={todo} />
      <button className='btn'>Add</button>
    </form>
  )
}

export default AddTodo