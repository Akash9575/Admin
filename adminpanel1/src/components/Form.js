import React, { useState } from 'react'
import SecondForm from './SecondForm'
import "react-toastify/dist/ReactToastify.css";


import "./Form.css"

const Form = () => {
    const[next, setNext] = useState(false)
    const[error,setError] = useState("")

    



    const [data,setData] = useState({
        // id:"",
        fname:"",
        lname:"",
        email:"",
        gender:"",
        pass:"",
        cpass:"",
        allEduction:[]
    })

    const HandleSubmit = (e) => {
        e.preventDefault()
        
        fetch("http://localhost:5000/create" , {
            method:"post",
            headers: {
                'Content-Type' : 'application/json'
              },
            body: JSON.stringify({data:data})
        }).then((res) => res.json() )
        .then((data) => {

            console.log(data)
            if(data.error) {
                alert(data.error)

            }

            
        })
            


        setData({
            // id:"",
            fname:"",
            lname:"",
            email:"",
            gender:"",
            pass:"",
            cpass:"",
            allEduction:[] 
        })
        setNext(false)
            
    }

    const HandleInput = (e) => {
        setData((oldvalue) => {
            return {...oldvalue, [e.target.name]:e.target.value}
        })
    }


    const NextForm = (e) => {
        e.preventDefault()
         if(data.fname === ""){
            setError("First name can not be empty")
            return;
        }
        else if(data.lname === ""){
            setError("Last name can not be empty")
            return;

        }
        else if(data.email === ""){
            setError("Email can not be empty")
            return;

        }
        else if (data.gender === "") {
            setError("you must select gender")
            return;
        }
        else if(data.pass === "") {
            setError("Password can not be empty")
            return;

        }
        else if(data.pass !== data.cpass ) {
            setError("password and confirm password must be same")
            return;

        }

        setError("")
        setNext(true)

    }



    const educationDetails = (value) => {

        setData((oldvalue) => {
          return {...oldvalue,allEduction:value}
        })
    }

    const Privous = (e) => {

        setNext(false)
    }

  return (
      <>
      
    <form onSubmit={HandleSubmit} className="form">
        {/* <Login /> */}
        {error ? <p className='err'>{error}</p> : ""}

        {next ? <SecondForm educationDetails={educationDetails}  Privous={Privous}  data={data} setError={setError}/> : 
        <>
        <div className='formItem'>
            <label>First name</label>
            <input className='formInput' name="fname" value={data.fname} onChange={HandleInput}/>
        </div>
        <div  className='formItem'>
            <label>Last name</label>
            <input name="lname" className='formInput' value={data.lname} onChange={HandleInput}/>
        </div>
        <div  className='formItem'>
            <label>Email</label>
            <input name="email" className='formInput' type="email" value={data.email} onChange={HandleInput}/>
        </div>
        <div  className='formItem'>
            <label>Gender</label>
            <div className='gender'>
            <input type="radio" name="gender" value="male" onChange={HandleInput}/>
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" value="female" onChange={HandleInput} />
            <label htmlFor="female">Female</label>
            </div>
        </div>
        <div  className='formItem'>
            <label>Password</label>
            <input name="pass" type="password" className='formInput' value={data.pass} onChange={HandleInput}/>
        </div>
        <div  className='formItem'>
            <label>Confirm Password</label>
            <input name="cpass" type="password" className='formInput' value={data.cpass} onChange={HandleInput}/>
        </div>
        <div  className='formItem'>
           <button type='text' onClick={NextForm}> Next</button> 
        </div>
        </>
        }
         
    </form>
    </>
  )
}

export default Form