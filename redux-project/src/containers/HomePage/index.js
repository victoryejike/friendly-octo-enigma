import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect'
import { selectUsers } from './selectors'
import axios from 'axios';

const stateSelector = createSelector(selectUsers, users => ({
  users
}))

const HomePage = ({ props }) => {
  const { users } = useSelector(stateSelector)

  console.log(users)

  const fetchUsers = async () => {
    const response = await axios.get('https://reqres.in/api/users').catch((err) => console.log('Err ', err))
    console.log(response.data.data)
  }

  useEffect(() => {
    fetchUsers()
  }, []);

  return (
    <div>Hello World</div>
  )
}

export default HomePage