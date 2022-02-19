import { ActionTypes } from "./constants";

export const setUser = (user) => {
  return {
    type: ActionTypes.SET_USER,
    payload: user
  }
}