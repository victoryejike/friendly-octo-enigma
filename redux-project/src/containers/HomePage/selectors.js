import { createSelector } from 'reselect';

const homePageState = (state) => state.homePageReducer

export const selectUsers = createSelector(homePageState, homePageReducer => homePageReducer.users);

