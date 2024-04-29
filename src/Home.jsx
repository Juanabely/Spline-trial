import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './images/logo.svg'

function Home() {
    return (
        <>
        <div>
           <Link to='/' > <img src={Logo} alt="logo" /> </Link>
        </div>
        <div>
      <iframe
        title="Visme Form"
        src="https://forms.visme.co/formsPlayer/kkj9e7m0-email-contact-form"
        width="100%"
        height="600"
        frameBorder="0"
        allowFullScreen
      />
    </div>
    </>
    )
}

export default Home