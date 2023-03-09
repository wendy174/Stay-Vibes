import { React, useState } from 'react'
import { stack as Menu } from 'react-burger-menu'
import { NavLink, useNavigate } from 'react-router-dom';
import "../index.css"
import Search from './Search';
import Logo from './images/Logo.png'


export default function NavBar() {
  const [menuState, setMenuState] = useState(false)
let navigate = useNavigate()
  const handleOpen = () => {
      const newState = !menuState
      setMenuState(newState);
  }

  function handleClick() {
    navigate('/')
  }
return (
  <div className='header'>
    <div onClick={handleClick}>
      <img className='logo' src={Logo} alt='logo' onClick={handleOpen}/>
    </div>

    <Menu right > 
        <NavLink to="/">Home</NavLink>
        <NavLink to="/me">Profile</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
        <NavLink to="/listings">All Homes</NavLink>
        <NavLink to="/addhome">Add Home</NavLink>
        <NavLink to="/login">Log Out</NavLink>
        <NavLink to="/reviews">Test</NavLink>
    </Menu>
  </div>
)
}