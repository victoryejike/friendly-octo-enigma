import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { setUser } from './actions';
import { createSelector } from 'reselect';
import { selectUser } from './selectors';

const stateSelector = createSelector(selectUser, (user) => ({
  user
}))

const UserPage = ({ props }) => {
  const { user } = useSelector(stateSelector);

  const { userId } = useParams();

  const dispatch = useDispatch();

  const setUserActionDispatcher = (user) => dispatch(setUser(user))

  const fetchUser = async (id) => {
    const response = await axios.get(`https://reqres.in/api/users/${id}`).catch(err => {
      console.log('err', err);
    })
    
    console.log('user', response.data.data);
    // setUserActionDispatcher(response.data.data)
    
    if (response) 
      setUserActionDispatcher(response.data.data)
    
  }

  useEffect(() => {
    if (userId && userId !== '') {
      fetchUser(userId);
    }
  }, [userId])

  console.log(user, userId);

  return (
    <div>
      <img src={user.avatar} alt="avatar" />
      <p>{user.first_name} {user.last_name}</p>
      <small>{user.email}</small>
    </div>
  )
}

export default UserPage