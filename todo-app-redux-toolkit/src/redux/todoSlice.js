import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [
    {
      id: 1,
      todo: 'Jog around the park 3x'
    },
    {
      id: 2,
      todo: '10 minutes meditation'
    },
    {
      id: 3,
      todo: 'Read for 1 hour'
    },
    {
      id: 4,
      todo: 'Pick up groceries'
    },
    {
      id: 5,
      todo: 'Complete Todo App'
    }
  ],
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
    }
  }
})

export const { addTodos, removeTodos } = todoSlice.actions;

export const getAllTodos = (state) => state.todos.todos

export default todoSlice.reducer;