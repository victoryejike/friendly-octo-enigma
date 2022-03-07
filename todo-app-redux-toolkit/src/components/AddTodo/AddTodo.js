import React, { useState } from 'react'
import './AddTodo.css';

const AddTodo = () => {
  const [todo, setTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todo === '') alert('please add a new task');
  }

  return (
    <form onSubmit={handleSubmit} className='addtodo'>
      <input className='input' type='text' placeholder='Create a new todo' onChange={(e) => setTodo(e.target.value)} value={todo} />
      <button className='btn'>Add</button>
    </form>
  )
}

export default AddTodo