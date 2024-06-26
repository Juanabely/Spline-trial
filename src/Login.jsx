import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'
import Logo from './images/logo.svg'

function Login() {
  return (
   <>
   <li><Link to="/"><img src={Logo} alt="logo" /></Link></li>
    <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
    </div>
    <form>
        <h3>Login Here</h3>

        <label for="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username"></input>

        <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password"></input>

        <button className='btn' >Log In</button>
        <div class="social">
          <div class="go"><i class="fab fa-google"></i>  Google</div>
          <div class="fb"><i class="fab fa-facebook"></i>  Facebook</div>
        </div>
    </form> </>
  )
}

export default Login