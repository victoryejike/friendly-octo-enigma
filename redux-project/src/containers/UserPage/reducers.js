import { ActionTypes } from './constants'

const initialState = {
  user: null,
  loading: true
}

const userPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_USER:
      return { ...state, user: action.payload }
    case ActionTypes.IS_LOADING: 
      return { ...state, loading: action.payload }
    default:
      return state;
  }
}

export default userPageReducer;