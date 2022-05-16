import React, { useEffect, useState } from 'react'
import UserAllEducation from './UserAllEducation'
import "./UserEducation.css"

const UserEduction = () => {

    let userdata = JSON.parse(localStorage.getItem("loginData"))
    const [userEductionInfo,setUserEductionInfo] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/userEduction" , {
                method: "get",
                headers: {
                    'Content-Type': 'application/json',
                    "email" : userdata.email
                },    
        }).then((res) => res.json()).then((data) => {

            console.log(data.result1)
            setUserEductionInfo(data.result1)
           
        })

    },[])
 

  return (
    // <div>UserEduction</div>
    <>
    <h1> Your Eductions </h1>
    <div className='allEduction'>
        
        {userEductionInfo.map((e) => 
            <>

            <UserAllEducation 
                institute={e.institute}
                cgpa={e.cgpa}
                startDate = {e.startDate}
                endDate = {e.endDate}
            />
            {/* <div>
                <p>{e.institute}</p>
                <p>{e.cgpa}</p>
                <p>{e.startDate}</p>
                <p>{e.endDate}</p>


            </div> */}
            </>
        )}

    </div>
    </>
  )
}

export default UserEduction