import React from 'react'

const Product = ({ name, price }) => {
    return (
        <>
            <h2>Name: {name}</h2>
            <p>Price: {price}</p>
        </>
    )
}

export default Product