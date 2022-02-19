import React from 'react'
import { useSelector } from 'react-redux'
import { createSelector } from 'reselect'
import { selectUsers } from './selectors'

const stateSelector = createSelector(selectUsers, (users) => ({
  users
}))

const UserList = () => {
  const { users } = useSelector(stateSelector);

  const isUsersEmpty = !users || (users && users.length === 0);

  if (isUsersEmpty) return null;

  return (
    <div>{
      users.map((user, id) => (
        <section key={id}>
          <img src={user.avatar} alt='image' />
          <p>{ user.first_name } { user.last_name }</p>
        </section>
      ))
    }</div>
  )
}

export default UserList