import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [
    
  ]
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodos: (state, { payload }) => {
      state.todos.push(payload);
    },
    removeTodos: (state, { payload }) => {
      state.todos = state.todos.filter(todo => todo.id !== payload)
    },
    completeTodos: (state, { payload }) => {
      getCheckedState
    }
  }
})

export const { addTodos, removeTodos, completeTodos } = todoSlice.actions;

export const getAllTodos = (state) => state.todos.todos

export const getAllTodosLength = (state) => (state.todos.todos).length

export const getCheckedState = () => new Array(getAllTodosLength).fill(false);

// export const isComplete = (state) => state.todos.complete

export default todoSlice.reducer;

/*
{
      id: 1,
      todo: 'Jogging',
      complete: false
    },
    {
      id: 2,
      todo: 'Walking',
      complete: false
    },
    {
      id: 3,
      todo: 'flopping',
      complete: false
    },

*/