import { createContext, useContext, useState } from "react";

export const appContext = createContext();

const USER = {
  name: 'Guest',
  isLoggedIn: false
}

const fetchStudents = fetch('https://reqres.in/api/users')
  .then(response => (response.json()))
  .then(data => {
    return (data.data)
  });

export const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(USER);
  const [student, setStudent] = useState({});

  fetchStudents.then(data => {
    setStudent(data);
  })

  const login = (data) => setUser({ name: data, isLoggedIn: true });

  const logout = () => setUser(USER);

  return (
    <appContext.Provider value={{ user, login, logout, student }}>
      {children}
    </appContext.Provider>
  )
}

export const useAppContext = () => {
  const { user, login, logout, student } = useContext(appContext);

  return {user, login, logout, student };
}