import React from 'react'

const Person = (props) => {
    return (
        <>
            <h2>Name: {props.name}</h2>
            <p>Age: {props.age}</p>
        </>
    )
}

export default Person