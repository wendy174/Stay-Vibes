import { React, useState } from 'react'
import { stack as Menu } from 'react-burger-menu'
import { NavLink } from 'react-router-dom';
import "../index.css"
import Search from './Search';


export default function NavBar() {
  const [menuState, setMenuState] = useState(false)

  const handleOpen = () => {
      const newState = !menuState
      setMenuState(newState);
  }

return (
  <div className='header'>
     <Search/>
    <Menu right > 
        <NavLink to="/">Home</NavLink>
        <NavLink to="/me">Profile</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
        <NavLink to="/listings">All Homes</NavLink>
        <NavLink to="/addhome">Add Home</NavLink>
        <NavLink to="/login">Log Out</NavLink>
        
    </Menu>
    <h1 className='stay-vibes' onClick={handleOpen}>Stay Vibes</h1>
   
  </div>
)
}