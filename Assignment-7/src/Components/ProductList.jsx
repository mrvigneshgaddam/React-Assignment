import React from 'react'

const ProductList = () => {

    const products = [
        { id: 1, name: "Phone", price: "$699" },
        { id: 2, name: "Laptop", price: "$1200" },
        { id: 3, name: "Headphones", price: "$199" },
    ];
    return (
        <>
            <br />
            <br />
            <h1>ProductList data</h1>
            <ol>
                {products.map((x) =>
                    <li key={x.id}>
                        id: {x.id} Name: {x.name} Price: {x.price}
                    </li>
                )}
            </ol>
        </>
    )
}

export default ProductList