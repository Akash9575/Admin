import React, { useState } from 'react'
import Input from '../Input'
import url from '../allData/Helper'
import "./Form.css"

const Login = (props) => {

    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    })

    const loginInput = (e) => {
        e.preventDefault();
        setLoginData((oldvalue) => {
            return { ...oldvalue, [e.target.name]: e.target.value }
        })
    }

    const userLogin = (e) => {
        fetch(`${url}userLogin`, {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ data: loginData })
        }).then((res) => res.json())
            .then((data) => {
                if (data.error) {
                    alert(data.error)
                }
                if (data.message === "login success") {
                    localStorage.setItem("loginData", JSON.stringify(loginData))
                    props.setChangeNavbar(true)
                }
            })

        setLoginData({
            email: "",
            password: ""
        })
    }

    return (
        <>
            <div className="form" >
                <div className='formItem'>
                    <label>Email</label>
                    <Input name="email" type="text" value={loginData.email} className="formInput" onChange={loginInput} />
                </div >
                <div className='formItem'>
                    <label>Password</label>
                    <Input name="password" type="password" value={loginData.password} className='formInput' onChange={loginInput} />
                </div>
                <button onClick={userLogin}> login </button>
            </div>
        </>
    )
}

export default Login