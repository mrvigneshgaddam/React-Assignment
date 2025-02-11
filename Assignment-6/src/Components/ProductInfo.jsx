import React from 'react'

const ProductInfo = () => {
    const products = [{ name: "SG", price: 5170, available: 5 }, { name: "DSC", price: 6750, available: 3 }, { name: "MRF", price: 9820, available: 6 }]
    return (
        <>
            <br />
            <br />
            <h2>Products</h2>
            <ol>
                {products.map(product => (
                    <li key={product.id}>
                        Bat Name:{product.name} - Price:{product.price}Rs - Available:{product.available}
                    </li>
                ))}
            </ol>
        </>
    )
}

export default ProductInfo