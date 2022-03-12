import { createSlice } from 'reduxjs-toolkit';

const initialState = [
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
]

const todoSlice = createSlice({
  name: todos,
  initialState,
  reducers: {

  }
})

export default todoSlice.reducer;