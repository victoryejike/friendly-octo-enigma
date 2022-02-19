import { ActionTypes } from './constants'

export const setUsers = (users) => {
  return {
    type: ActionTypes.SET_USERS,
    payload: users
  }
}