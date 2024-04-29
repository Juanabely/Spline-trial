import Spline from '@splinetool/react-spline';
import Logo from './images/logo.svg'
import IconTwitter from './images/icon-twitter.svg'
import Iconyoutube from './images/icon-youtube.svg'
import IconLaptop from './images/icon-laptop.svg'
import { Link } from 'react-router-dom';

export default function Splineapp() {
  return (
    <>
    <div className='wrapper'>
    <Spline className='spline' scene="https://prod.spline.design/1TcYhlGLkjDJ1dJ3/scene.splinecode" />
    <div className='content'>
      <div className='menu'>
        <li> <img src={Logo} alt="logo" /> </li>
        <li> <Link to="/home">Contact</Link> </li>
        <li> <Link to="/downloads">Download</Link> </li>
        <li> <Link to="/apps">Apps</Link> </li>
        <li> <Link to="/login">Login</Link> </li>
        <li> <Link to='/started' ><button>Get started</button></Link></li>
      </div>
        <h1>Collaborate with people</h1>
        <p>Bring your team together and build your community by using our cross-platform app that lets you collaborate via chat, voice and by sharing and storing unlimited media files. A world of topics is waiting for you. Join the private beta.

        </p>
        <button> 
          <img src={IconLaptop} alt="Download" />
           Download for mac 
           </button>
        </div>
        <div className='socials'>
          <div className='line'></div>
          <img src={IconTwitter} alt="Twitter" />
          <img src={Iconyoutube} alt="Youtube" />
        </div>
      </div></>
  );
}
