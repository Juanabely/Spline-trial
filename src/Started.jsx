import React from 'react'
import Logo from './images/logo.svg'
import { Link } from 'react-router-dom'
import './started.css'

function Started() {
  return (
    <>
    <div> <Link to='/' ><img src={Logo} alt="logo" /></Link> </div>
    <div className='wrap'>
       <Link to='/login'> <button>Login</button> </Link>
       <Link to='/apps'> <button>Apps</button> </Link>
       <Link to='/downloads'> <button>Download</button> </Link>
       <Link to='/home' > <button>Contact</button> </Link>
    </div>
    </>
  )
}

export default Started