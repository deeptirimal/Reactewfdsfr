import React from 'react'
import './Navbar.css'
import logo_light from '../../assets/brss.png'
import logo_dark from '../../assets/brss.png'
import search_icon_light from '../../assets/search-w.png'
import search_icon_dark from '../../assets/search-b.png'
import toogle_light from '../../assets/night.png'
import toogle_dark from '../../assets/day.png'

const Navbar = ({theme, setTheme}) => {

const toogle_mode = ()=> {
    theme == 'light' ? setTheme('dark') : setTheme('light');
}

  return (
    <div className='navbar'>

     <img src={theme == 'light' ? logo_light : logo_dark}
     alt="" className='logo'/> 
     
     <ul>
        <li>Home</li>
        <li>Academics</li>
        <li>Gallery</li>
        <li>Contactus</li>
        <li>News</li>
        
     </ul>

  <button className='btn'>Login</button>
     </div>

     
    

    
  )
}

export default Navbar
