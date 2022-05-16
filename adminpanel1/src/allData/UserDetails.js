import React, { useEffect, useState } from 'react'
import "./UserDetails.css"

const UserDetails = () => {

    const [userinfo, setUserinfo] = useState({})

    let userdata = JSON.parse(localStorage.getItem("loginData"))

    // var use
    useEffect(() => {

        //  fetch("http://localhost:5000/userDetails").then((res) => res.json).then((data) => console.log(data))
        fetch("http://localhost:5000/userDetails",
            {
                method: "get",
                headers: {
                    'Content-Type': 'application/json',
                    "email" : userdata.email
                },
            }).then((res) => res.json()).then((data) => {

                console.log(data.result[0])

                setUserinfo(data.result[0])
               
            })

        

    },[])


  return (
      
    <>
    {/* {console.log(userinfo.fname)} */}
    <div className='details'>
        <div className='item'>
            Email : {userdata.email} 
        </div>
        <div className='item'>
            Name : {userinfo.fname} {userinfo.lname} 
        </div>
        <div className='item'>
            Gender : {userinfo.gender}
        </div>
        
    </div>

    {/* <h1>{userinfo.use.fname}</h1>
    <h1>{userinfo.use.lname}</h1>
    <h1>{userinfo.use.gender}</h1> */}

    </>
  )
}

export default UserDetails