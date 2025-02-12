import React from 'react'
import Person from './Components/Person'
import Product from './Components/Product'

const App = () => {
  return (
   <>
  <Person name="Harsh" age={21}/>
  <Person name="Vignesh" age={21}/>
  <Product name="Laptop" price={999}/>
  <Product name="smartphone" price={100.24}/>
   </>
  )
}

export default App