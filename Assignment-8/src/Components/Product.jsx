import React from 'react'

const Product = (props) => {
    return (
        <>
            <h2>Name: {props.name}</h2>
            <p>Price: {props.price}</p>
        </>
    )
}

export default Product