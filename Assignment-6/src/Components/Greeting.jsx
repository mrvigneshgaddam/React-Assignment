import React from 'react'

const Greeting = () => {
    let name = 'Vignesh'
    return (
        <>
            <h1>Hello {name}</h1>
            <p>{new Date().toISOString()}</p>
        </>
    )
}

export default Greeting