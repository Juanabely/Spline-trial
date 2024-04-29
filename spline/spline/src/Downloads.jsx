import React from 'react'
import './download.css'
import { color } from 'framer-motion'
import Window from'./images/window.svg'
import Mac from './images/mac.svg'

function Downloads() {
  return (
    <>
   
    <div className='download-img'>
    <div><h1 className='words'>
        We got all your devices covered
        </h1></div>
        <img src="https://th.bing.com/th/id/OIG4.Q4_SRv5bs6LIGqEsPAJk?pid=ImgGn" alt="Download" />
    
    <div className='mobile'><h1 className='words' >All our mobile apps are <a href="https://en.softonic.com/downloads/beta" target='blank'>here</a> </h1></div>
    
    </div>
    <div className='downloader'>
        <h4>Download chatter box</h4>
        <div className='inside'>
    <img src={Window} alt="download" />
    <button>Download</button>
    </div>
    <div className='mac'> <img src={Mac} alt="mac" /> <button>Download</button> </div>
    </div>
   
    
    </>
  )
}

export default Downloads