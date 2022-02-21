import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { setUser, setLoading } from './actions';
import { createSelector } from 'reselect';
import { selectUser, selectUserLoading } from './selectors';

const stateSelector = createSelector(selectUser, (user) => ({
  user
}))

const loadSelector = createSelector(selectUserLoading, (loading) => ({
  loading
}))

const UserPage = ({ props }) => {
  const { user } = useSelector(stateSelector);

  const { loading } = useSelector(loadSelector);

  const { userId } = useParams();

  const dispatch = useDispatch();

  const setUserActionDispatcher = (user) => dispatch(setUser(user));
  const setLoadingUserActionDispatcher = (bool) => dispatch(setLoading(bool));

  const fetchUser = async (id) => {
    setLoadingUserActionDispatcher(true);
    const response = await axios.get(`https://reqres.in/api/users/${id}`).catch(err => {
      console.log('err', err);
    })
    
    if (response) {
      setUserActionDispatcher(response.data.data)
      setLoadingUserActionDispatcher(false);
    }
  }

  useEffect(() => {
    if (userId && userId !== '') fetchUser(userId)
    return () => setUserActionDispatcher({}); //added this line because, the previous user was still being returned for a split second before being updated with new user info
  }, [userId])

  return (
    <div>
      {
        (Object.keys(user).length === 0 && loading) ? <div>Loading...</div>
        : (<div>
            <img src={user.avatar} alt={user.first_name} />
            <p>{user.first_name} {user.last_name}</p>
            <small>{user.email}</small>
          </div>)
      }
    </div>
  )
}

export default UserPage