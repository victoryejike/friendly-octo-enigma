import { createContext, useContext, useState } from "react";

export const appContext = createContext();

const USER = {
  name: 'Guest',
  isLoggedIn: false
}

const studentList = [
  {
    "id":1,
    "email":"george.bluth@reqres.in",
    "first_name":"George",
    "last_name":"Bluth",
    "avatar":"https://reqres.in/img/faces/1-image.jpg"
  },
  {
    "id":2,
    "email":"janet.weaver@reqres.in",
    "first_name":"Janet",
    "last_name":"Weaver",
    "avatar":"https://reqres.in/img/faces/2-image.jpg"
  },
  {
    "id":3,
    "email":"emma.wong@reqres.in",
    "first_name":"Emma",
    "last_name":"Wong",
    "avatar":"https://reqres.in/img/faces/3-image.jpg"
  },
  {
    "id":4,
    "email":"eve.holt@reqres.in",
    "first_name":"Eve",
    "last_name":"Holt",
    "avatar":"https://reqres.in/img/faces/4-image.jpg"
  },
  {
    "id":5,
    "email":"charles.morris@reqres.in",
    "first_name":"Charles",
    "last_name":"Morris",
    "avatar":"https://reqres.in/img/faces/5-image.jpg"
  },
  {
    "id":6,
    "email":"tracey.ramos@reqres.in",
    "first_name":"Tracey",
    "last_name":"Ramos",
    "avatar":"https://reqres.in/img/faces/6-image.jpg"
  }
]


export const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(USER);
  const [student, setStudent] = useState(studentList);
  const [toggle, setToggle] = useState(false);

  const login = (data) => setUser({ name: data, isLoggedIn: true });

  const logout = () => setUser(USER);

  const addStudent = (data) => {
    console.log('works')
    const newStudent = student.concat([data]);
    setStudent(newStudent);
  }
  console.log(student);

  return (
    <appContext.Provider value={{ user, login, logout, student, addStudent, toggle, setToggle }}>
      {children}
    </appContext.Provider>
  )
}

export const useAppContext = () => {
  const { user, login, logout, student, addStudent, toggle, setToggle } = useContext(appContext);

  return {user, login, logout, student, addStudent, toggle, setToggle };
}