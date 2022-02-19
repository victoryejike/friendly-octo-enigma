import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { createSelector } from 'reselect'
import { selectUsers } from './selectors'

const stateSelector = createSelector(selectUsers, (users) => ({
  users
}))

const UserList = () => {
  const { users } = useSelector(stateSelector);

  const history = useHistory();

  const handleClick = (id) => {
    history.push(`/user/${id}`)
  }

  const isUsersEmpty = !users || (users && users.length === 0);

  if (isUsersEmpty) return null;

  return (
    <div>{
      users.map((user, id) => (
        <section key={id} onClick={() => handleClick(user.id)}>
          <img src={user.avatar} alt='userImage' />
          <p>{ user.first_name } { user.last_name }</p>
        </section>
      ))
    }</div>
  )
}

export default UserList