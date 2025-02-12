import React from 'react'
import Person from './Components/Person'
import Product from './Components/Product'

const App = () => {
  return (
    <>
      <Person name="Vignesh" age={21} />
      <Person name="Harsh" age={18} />
      <Product name="Laptop" price={50000} />
      <Product name="smartphone" price={20000} />

    </>
  )
}

export default App