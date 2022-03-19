import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
  checkedTodos: [],
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodos: (state, { payload }) => {
      state.todos.push(payload);
      state.checkedTodos.push(false);
    },
    removeTodos: (state, { payload }) => {
      state.todos = state.todos.filter((todo, index) => index !== payload)
      state.checkedTodos = state.checkedTodos.filter((check, index) => index !== payload)
    },
    completeTodos: (state, { payload }) => {
      state.checkedTodos = state.checkedTodos.map((item, index) => index === payload ? !item : item)
    }
  }
})

export const { addTodos, removeTodos, completeTodos } = todoSlice.actions;

export const getAllTodos = (state) => state.todos.todos

export const getAllCheckBoxes = (state) => state.todos.checkedTodos

export default todoSlice.reducer;
