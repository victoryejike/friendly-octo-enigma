import { ActionTypes } from "./constants";

export const setUser = (user) => {
  return {
    type: ActionTypes.SET_USER,
    payload: user
  }
}

export const setLoading = (bool) => {
  return {
    type: ActionTypes.IS_LOADING,
    payload: bool,
  }
}