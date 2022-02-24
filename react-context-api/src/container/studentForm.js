import React, { useState } from 'react'
import styled from 'styled-components'
import { useAppContext } from '../context/appContext'

const FormWrapper = styled.form`
  background-color: #ECEFF1;
  width: 30%;
  margin: 8rem auto;
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

const StudentForm = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');

  const { addStudent, setToggle } = useAppContext();

  const handleFirstNameChange = (e) => setFirstname(e.target.value);
  const handleLastNameChange = (e) => setLastname(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const id = Math.floor(Math.random() * 10) + 1;

    const data = {
      first_name: firstname,
      last_name: lastname,
      email,
      avatar: `https://reqres.in/img/faces/${id}-image.jpg`,
    }
    // console.log(data);
    addStudent(data);
    setToggle(false);
  }

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <h3>Add New Student</h3>
      <div>
        <Input name='firstname' placeholder='enter firstname' value={firstname} onChange={handleFirstNameChange} type='text' required/>
      </div>
      <div>
        <Input name='lastname' placeholder='enter lastname' value={lastname} onChange={handleLastNameChange} type='text' required/>
      </div>
      <div>
        <Input name='email' placeholder='enter email' value={email} onChange={handleEmailChange} type='email' required/>
      </div>
      <Button>Submit</Button>
    </FormWrapper>
  )
}

export default StudentForm