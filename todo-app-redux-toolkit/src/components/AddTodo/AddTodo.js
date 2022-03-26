import React, { useState } from 'react'
import './AddTodo.css';
import { addTodos } from '../../redux/todoSlice';
import { useDispatch } from 'react-redux';

const AddTodo = () => {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todo === '') {
      alert('please add a new task')
      return
    }

    dispatch(addTodos({id: Date.now().toString() , todo: todo, complete: false}));

    setTodo('');
  }

  return (
    <form onSubmit={handleSubmit} className='addtodo'>
      <input className='input' type='text' placeholder='Elite, your goals for today?' onChange={(e) => setTodo(e.target.value)} value={todo} />
    </form>
  )
}

export default AddTodo