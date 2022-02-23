import React, { useState } from 'react'
import styled from 'styled-components'
import { useAppContext } from '../context/appContext'

const FormWrapper = styled.form`
  background-color: #ECEFF1;
  width: 30%;
  margin: 10rem auto;
  padding: .5rem 0;
  border-radius: .5rem;
`

const Input = styled.input`
  width: 80%;
  padding: 1rem;
  margin: .5rem 0;
  outline: none;
  border: none;
  font-family: 'Manrope', san serif;
  font-size: 16px;
  border-top-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
`

const Button = styled.button`
  background-color: #607D8B;
  color: #ECEFF1;
  outline: none;
  border: none;
  font-size: 16px;
  font-family: 'Manrope', san serif;
  padding: .5rem 1rem;
  margin: .7rem 0;
  border-top-left-radius: .5rem;
  border-bottom-right-radius: .5rem;
  cursor: pointer;
`

const LoginForm = () => {
  const { login } = useAppContext();

  const [name, setName] = useState('')

  const handleChange = (e) => setName(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    login(name);
  }

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <h3>Login to view students page</h3>
      <div>
        <Input name='firstname' placeholder='enter name' type='text' value={name} onChange={handleChange} required/>
      </div>
      <div>
        <Input name='password' placeholder='enter password' type='password' required/>
      </div>
      <Button>Login</Button>
    </FormWrapper>
  )
}

export default LoginForm