import React from 'react'
import EducationItem from './EducationItem'
import "./EducationTable.css"

const EducationTable = (props) => {

    let i = true;
    if (props.allEduction.length > 0) {
        i = false;
    }

    return (
        <> 
           {/* <div className='gap'> */}
            <table className='table'>
                <tbody>
                    {!i && <tr className='tr'>
                        <th className='th'>Institute</th>
                        <th className='th'>CGPA</th>
                        <th className='th'>Start Date </th>
                        <th className='th'>End Date </th>
                    </tr>}
                </tbody>
            </table>
            {/* </div> */}
            {props.allEduction.map((e, index) =>
                <React.Fragment key={index}>
                    <EducationItem
                        institute={e.institute}
                        cgpa={e.cgpa}
                        startDate={e.startDate}
                        endDate={e.endDate}
                    />
                </React.Fragment>
            )}
        </>

    )
}

export default EducationTable