import React, { useEffect, useState } from 'react'
import UserAllEducation from './UserAllEducation'
import url from './Helper'
import "./UserEducation.css"

const UserEduction = () => {
    
    let userdata = JSON.parse(localStorage.getItem("loginData"))
    const [userEductionInfo, setUserEductionInfo] = useState([])

    useEffect(() => {
        fetch(`${url}userEduction`, {
            method: "get",
            headers: {
                'Content-Type': 'application/json',
                "email": userdata.email
            },
        }).then((res) => res.json())
            .then((data) => {
                setUserEductionInfo(data.result1)
            })
    }, [userdata.email]) 

    return (
        <>
            <h1> Your Eductions </h1>
            <div className='allEduction'>
                {userEductionInfo.map((e,index) =>
                    <React.Fragment key={index}>
                        <UserAllEducation
                            institute={e.institute}
                            cgpa={e.cgpa}
                            startDate={e.startDate}
                            endDate={e.endDate}
                        />
                    </React.Fragment>
                )}
            </div>
        </>
    )
}

export default UserEduction