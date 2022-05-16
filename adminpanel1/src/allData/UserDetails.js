import React, { useEffect, useState } from 'react'
import "./UserDetails.css"

const UserDetails = () => {

    const [userinfo, setUserinfo] = useState({})
    let userdata = JSON.parse(localStorage.getItem("loginData"))

    useEffect(() => {
        fetch("http://localhost:5000/userDetails",
            {
                method: "get",
                headers: {
                    'Content-Type': 'application/json',
                    "email": userdata.email
                },
            }).then((res) => res.json())
            .then((data) => {
                setUserinfo(data.result[0])
            })
    }, [])

    return (
        <>
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
        </>
    )
}

export default UserDetails