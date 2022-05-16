import React from 'react'
import { useState } from 'react'
import EducationTable from './EducationTable'
import Input from '../Input'
import "./Form"

const SecondForm = (props) => {

    const [education, setEduction] = useState({
        institute: "",
        cgpa: "",
        startDate: "",
        endDate: ""
    })

    const HandleEductionInput = (e) => {
        e.preventDefault()
        setEduction((oldvalue) => {
            return { ...oldvalue, [e.target.name]: e.target.value }
        })
    }

    const HadleAddEduction = (e) => {
        e.preventDefault()
        if (education.institute === "") {
            props.setError("institute can not be empty")
            return;
        }
        else if (education.cgpa === "") {
            props.setError("Cgpa can not be empty")
            return;
        }
        else if (education.startDate >= education.endDate) {
            props.setError("start date must be less than end date")
            return;
        }

        props.data.allEduction.push(education)

        props.setError("")
        setEduction({
            institute: "",
            cgpa: "",
            startDate: "",
            endDate: ""
        })
    }

    const HandleEductionSubmit = (e) => {
        if (props.data.allEduction.length === 0) {
            e.preventDefault()
            props.setError("You must enter one eduction")
        }
    }

    const PrivousForm = (e) => {
        e.preventDefault()
        props.Privous()
    }

    return (
        <>
            <button onClick={PrivousForm}>Perivous</button>
            <div className='formItem'>
                <label>Institute</label>
                <Input name="institute" className='formInput' value={education.institute} onChange={HandleEductionInput} />
            </div >
            <div className='formItem'>
                <label>CGPA</label>
                <Input name="cgpa" type="number" className='formInput' value={education.cgpa} onChange={HandleEductionInput} />
            </div>
            <div className='formItem'>
                <label>Start Date</label>
                <Input type="date" className='formInput' name="startDate" value={education.startDate} onChange={HandleEductionInput} /> 
            </div>
            <div className='formItem'>
                <label>End Date</label>
                <Input type="date" className='formInput' name="endDate" value={education.endDate} onChange={HandleEductionInput} />
            </div>
            <div>
                <button onClick={HandleEductionSubmit}>Submit</button>
                <button onClick={HadleAddEduction}>Add Eduction</button>
            </div>

            <EducationTable allEduction={props.data.allEduction} />
        </>
    )
}

export default SecondForm