import React from 'react'
import styled from 'styled-components'
import LoginForm from './LoginForm';
import Home from './Home';
import { useAppContext } from '../context/appContext';

const Wrapper = styled.div`
  padding: 1rem 2rem;
  text-align: center;
`

const Auth = () => {
  const { user } = useAppContext();
  console.log(user)
  return (
    <Wrapper>
      {
        user.isLoggedIn ? <Home />
        : <LoginForm />
      }
      
    </Wrapper>
  )
}

export default Auth