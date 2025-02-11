import React from 'react'

const navbar = () => {
  return (
     <nav className="navbar">
      <div className="navbar-logo">
        <h1>MyWebsite</h1>
      </div>
      <div className="navbar-buttons">
        <button className="button">Button 1</button>
        <button className="button">Button 2</button>
        <button className="button">Button 3</button>
      </div>
    </nav>
  )
}

export default navbar