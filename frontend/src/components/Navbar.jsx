import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
        <div className='container'>
            <Link to='/'>
                <h1>NutriFlex</h1>
            </Link>
            <nav>
              <div>
                <Link to="/login">Log in</Link>
                <Link to="/signup">Signup</Link>
              </div>
            </nav>
        </div>
    </header>
  )
}

export default Navbar
