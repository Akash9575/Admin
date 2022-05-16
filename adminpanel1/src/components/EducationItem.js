import React from 'react'
import "./EducationTable.css"

const EducationItem = (props) => {
    return (
        <>
            <table className='table'>
                <tbody>
                    <tr className='tr' >
                        <td className='th'>{props.institute}</td>
                        <td className='th'>{props.cgpa}</td>
                        <td className='th'>{props.startDate}</td>
                        <td className='th'>{props.endDate}</td>
                    </tr>
                </tbody>
            </table>
            <div>
            </div>
        </>
    )
}

export default EducationItem