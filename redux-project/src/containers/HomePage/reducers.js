import { ActionTypes } from './constants'

const initialState = {
  users: []
}

const homePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_USERS:
      return { ...state, users: action.payload }
    default:
      return state;
  }
}

export default homePageReducer;