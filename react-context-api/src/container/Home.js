import React from 'react'
import styled from 'styled-components';
import { useAppContext } from '../context/appContext';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 85%;
  margin: 2rem auto;
`

const Card = styled.div`
  background-color: #ECEFF1;
  padding: 2rem;
  border-top-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
`

const Button = styled.button`
  background-color: #607D8B;
  color: #ECEFF1;
  outline: none;
  border: none;
  font-size: 16px;
  font-family: 'Manrope', san serif;
  padding: .5rem 1rem;
  margin-top: 7rem;
  border-top-left-radius: .5rem;
  border-bottom-right-radius: .5rem;
  cursor: pointer;
`

const Home = () => {
  const { student } = useAppContext();

  const studentList = student.map(student => {
    const { avatar, id, email, first_name, last_name } = student
    return (
      <Card key={id}>
        <img src={avatar} alt={first_name} />
        <div>{first_name} {last_name}</div>
        <small>{email}</small>
      </Card>
    )
  })

  return (
    <div>
      {
        Object.keys(student).length === 0 ? <div>...Loading</div>
        : (
          <Wrapper>{studentList}</Wrapper>
        )
      }
      <Button>Add New Student</Button>
    </div>
  )
}

export default Home