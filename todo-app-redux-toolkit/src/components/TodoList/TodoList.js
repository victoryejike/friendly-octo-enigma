import React from 'react'
import './TodoList.css'
import cross from '../../images/icon-cross.svg';

const TodoList = ({ todos }) => {
  return (
    <div className='todolist'>
      {
        todos.map(todo => (
          <div className='todos' key={todo.id}>
            <li>{todo.todo}</li>
            <img src={cross} alt='check todos' />
          </div>
        ))
      }
      <div>todo</div>
    </div>
  )
}

export default TodoList