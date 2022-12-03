import React from 'react'
import Logo from '../assets/type-01.svg'

const Navbar = () => {
  return (
    <nav className='navbar  navbar-expand navbar-dark bg-dark'>
        <div className='container-fluid'>
            <div className='navbar-brand'>
                <img src={Logo} alt='logo' style={{width:'40px'}}></img>
            </div>
            <div className='text-white h5 fw-semibold'>
                Put your fingers on keyboard right now!
            </div>
        </div>
    </nav>
  )
}

export default Navbar