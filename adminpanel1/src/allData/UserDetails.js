import React, { useEffect, useState } from 'react'
import url from './Helper'
import "./UserDetails.css"

const UserDetails = () => {

    const [userinfo, setUserinfo] = useState({})
    let userdata = JSON.parse(localStorage.getItem("loginData"))

    useEffect(() => {
        fetch(`${url}userDetails`,
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