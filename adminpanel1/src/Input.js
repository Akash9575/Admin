import React from 'react'

const Input = (props) => {
  return (
    <>
        <input 
            type={props.type}
            id={props.id}
            className={props.className}
            value={props.value}
            name={props.name}
            onChange={props.onChange}
        />
    </>
  )
}

export default Input