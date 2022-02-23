import React from 'react'
import styled from "styled-components";
import { useAppContext } from '../context/appContext';

const Wrapper = styled.nav`
  padding: .5rem 2rem;
  border-bottom: 1px solid #ededed;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Button = styled.button`
  background-color: #607D8B;
  color: #ECEFF1;
  outline: none;
  border: none;
  font-size: 16px;
  font-family: 'Manrope', san serif;
  padding: .5rem 1rem;
  margin-left: 1rem;
  border-top-left-radius: .5rem;
  border-bottom-right-radius: .5rem;
  cursor: pointer;
`

const Header = () => {
  const { user, logout } = useAppContext();
  return (
    <Wrapper>
      <div>
        <h1>Student Portal</h1>
      </div>
      <FlexWrapper>
        <h3>Welcome {user.name}</h3>
        {
          user.isLoggedIn ? (
            <Button onClick={logout}>LogOut</Button>
          ) : null
        }
      </FlexWrapper>
    </Wrapper>
  )
}

export default Header