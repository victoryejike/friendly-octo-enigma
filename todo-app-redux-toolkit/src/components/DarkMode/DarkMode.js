import React, { useState } from 'react'
import Sun from '../../images/icon-sun.svg'
import Moon from '../../images/icon-moon.svg'

const DarkMode = () => {
  const setDark = () => {
    localStorage.setItem("theme", "dark");

    document.documentElement.setAttribute("data-theme", "dark");
  };

  const setLight = () => {
    localStorage.setItem("theme", "light");

    document.documentElement.setAttribute("data-theme", "light");
  };

  const storedTheme = localStorage.getItem("theme");

  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

  const defaultDark = storedTheme === "dark" || (storedTheme === null && prefersDark);

  if (defaultDark) {
    setDark();
  }

  const [darkmode, setDarkmode] = useState(defaultDark);

  const handleClick = () => {
    console.log(defaultDark)
    if (defaultDark === false) {
      setDark();
      setDarkmode(!darkmode)
    } else if (defaultDark === true){
      setLight()
      setDarkmode(!darkmode)
    }
    
  }

  return (
    <img src={!darkmode ? Moon : Sun} alt='theme' onClick={handleClick}/>
  )
}

export default DarkMode