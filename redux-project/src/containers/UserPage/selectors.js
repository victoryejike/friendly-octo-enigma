import { createSelector } from 'reselect';

const userPageState = (state) => state.userPageReducer

export const selectUser = createSelector(userPageState, userPageReducer => userPageReducer.user);

export const selectUserLoading = createSelector(userPageState, userPageReducer => userPageReducer.loading);

