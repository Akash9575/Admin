import React from 'react'
import "./UserAllEducation.css"

const UserAllEducation = (props) => {

    const start = props.startDate.toString().split('T')[0];
    const end = props.endDate.toString().split('T')[0];

    return (
        <>
            <div className='edu'>
                <div className='Eduactionitem'>
                    Institute :- {props.institute}
                </div >
                <div className='Eduactionitem'>
                    Cgpa :- {props.cgpa}
                </div>
                <div className='Eduactionitem'>
                    Start Date :- {start}
                </div>
                <div className='Eduactionitem'>
                    End Date :- {end}
                </div>
            </div>
        </>
    )
}

export default UserAllEducation