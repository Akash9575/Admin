import React, { useState } from 'react'
import SecondForm from './SecondForm'
import Input from '../Input'
import url from '../allData/Helper'
import "./Form.css"

const Form = () => {

    const [next, setNext] = useState(false)
    const [error, setError] = useState("")
    const [data, setData] = useState({
        fname: "",
        lname: "",
        email: "",
        gender: "",
        pass: "",
        cpass: "",
        allEduction: []
    })

    const HandleSubmit = (e) => {
        e.preventDefault()

        fetch(`${url}create`, {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ data: data })
        }).then((res) => res.json())
            .then((data) => {
                if (data.error) {
                    alert(data.error)
                }
            })

        setData({
            fname: "",
            lname: "",
            email: "",
            gender: "",
            pass: "",
            cpass: "",
            allEduction: []
        })
        setNext(false)
    }

    const HandleInput = (e) => {
        setData((oldvalue) => {
            return { ...oldvalue, [e.target.name]: e.target.value }
        })
    }

    const NextForm = (e) => {
        e.preventDefault()

        if (data.fname === "") {
            setError("First name can not be empty")
            return;
        }
        else if (data.lname === "") {
            setError("Last name can not be empty")
            return;
        }
        else if (data.email === "") {
            setError("Email can not be empty")
            return;
        }
        else if (data.gender === "") {
            setError("you must select gender")
            return;
        }
        else if (data.pass === "") {
            setError("Password can not be empty")
            return;
        }
        else if (data.pass !== data.cpass) {
            setError("password and confirm password must be same")
            return;
        }
        setError("")
        setNext(true)
    }

    const educationDetails = (value) => {
        setData((oldvalue) => {
            return { ...oldvalue, allEduction: value }
        })
    }

    const Privous = (e) => {
        setNext(false)
    }

    return (
        <>
            <form onSubmit={HandleSubmit} className="form">
                {error ? <p className='err'>{error}</p> : ""}

                {next ? <SecondForm educationDetails={educationDetails} Privous={Privous} data={data} setError={setError} /> :
                    <>
                        <div className='formItem'>
                            <label>First name</label>
                            <Input className='formInput' name="fname" value={data.fname} onChange={HandleInput} />
                        </div>
                        <div className='formItem'>
                            <label>Last name</label>
                            <Input name="lname" className='formInput' value={data.lname} onChange={HandleInput} />
                        </div>
                        <div className='formItem'>
                            <label>Email</label>
                            <Input name="email" className='formInput' type="email" value={data.email} onChange={HandleInput} />
                        </div>
                        <div className='formItem'>
                            <label>Gender</label>
                            <select name="gender" className='formDropDown' value={data.gender} onChange={HandleInput}>
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className='formItem'>
                            <label>Password</label>
                            <Input name="pass" type="password" className='formInput' value={data.pass} onChange={HandleInput} />
                        </div>
                        <div className='formItem'>
                            <label>Confirm Password</label>
                            <Input name="cpass" type="password" className='formInput' value={data.cpass} onChange={HandleInput} />
                        </div>
                        <div className='formItem'>
                            <button type='text' onClick={NextForm}> Next</button>
                        </div>
                    </>
                }
            </form>
        </>
    )
}

export default Form