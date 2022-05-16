import React, { useState } from 'react'
import "./NavBar.css"


const NavBar = (props) => {

  // const [changeNavbar, setChangeNavbar] = useState(true)


  const login = () => {
      props.handlelogin(true)
  }

  
  const register = () => {
    props.handleregister(false)
  
  }

  const userdetails = () => {
    props.hadleUserinfo(true)
  }

  const educationDetails = () => {
    props.hadleUserEduction(false)
  }

  const logout = () => {

    localStorage.clear();
    props.setChangeNavbar(false)

  }





  return (
    <>
     {props.changeNavbar? 
         <ul>
         <li onClick={userdetails}> user details</li>
         <li onClick={educationDetails}> Education</li>
         <li onClick={logout}> logout</li>
       </ul>
        :
        <ul>
            <li onClick={login}>Login</li>
            <li onClick={register}> Register</li>
        </ul>
       
        }
    </>
  )
}

export default NavBar