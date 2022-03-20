import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodos: (state, { payload }) => {
      state.todos.push(payload);
    },
    removeTodos: (state, { payload }) => {
      state.todos = state.todos.filter((todo) => todo.id !== payload)
    },
    filterTodos: (state) => {
      state.todos = state.todos.filter((todo) => todo.complete !== true)
    },
    completeTodos: (state, { payload }) => {
      state.todos = state.todos.map((todo) => todo.id === payload ? {...todo, complete: !todo.complete} : {...todo, complete: todo.complete})
    }
  }
})

export const { addTodos, removeTodos, completeTodos, filterTodos } = todoSlice.actions;

export const getAllTodos = (state) => state.todos.todos

export default todoSlice.reducer;
