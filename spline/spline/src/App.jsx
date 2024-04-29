import './App.css'
import Splineapp from './Splineapp'
import{BrowserRouter,Route,Routes} from 'react-router-dom'
import Login from './Login'
import Started from './Started'
import Home from './Home'
import Apps from './Apps'
import Logo from './images/logo.svg'
import { productData } from './data'
import { Link } from 'react-router-dom'
import Downloads from './Downloads'


function App() {
  const products = productData.map((item) => (
    <Apps
      key={item.id}
      name={item.name}
      url={item.imageurl}
      price={item.price}
      discription={item.discription}
      
    />
  ));
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<Splineapp/>}/>
      <Route path='/login' element={<Login/>} />
      <Route path='/started' element={<Started/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/apps' element={
        <>
        <Link to='/' ><img src={Logo} alt="logo" /></Link>
      <div className='cards--1'>  {products} </div></>} />
      <Route path='/downloads' element = {
      <> <Link to='/' ><img src={Logo} alt="logo" /></Link>
      <Downloads/></>} />

      
      </Routes>
    </BrowserRouter>
       
    </>
  )
}

export default App
