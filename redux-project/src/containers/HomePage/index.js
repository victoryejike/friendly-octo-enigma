import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect'
import { selectUsers } from './selectors'
import { setUsers } from './actions';
import axios from 'axios';
import UsersList from './usersList';

const stateSelector = createSelector(selectUsers, users => ({
  users
}))

const HomePage = ({ props }) => {
  const { users } = useSelector(stateSelector);
  const dispatch = useDispatch();

  const setUsersActionDispatcher = (users) => dispatch(setUsers(users));
  // const { setUsers } = actionDispatcher(useDispatch());

  const fetchUsers = async () => {
    const response = await axios.get('https://reqres.in/api/users').catch((err) => console.log('Err ', err))

    setUsersActionDispatcher(response.data.data);
  }

  useEffect(() => {
    fetchUsers()
  }, []);

  console.log(`users:`, users);

  return (
    <div>
    <UsersList />
    </div>
  )
}

export default HomePage