import { React, useState } from 'react'
import { stack as Menu } from 'react-burger-menu'
import { NavLink } from 'react-router-dom';
import "../index.css"


export default function NavBar() {
  const [menuState, setMenuState] = useState(false)

  const handleOpen = () => {
      const newState = !menuState
      setMenuState(newState);
  }

return (
  <div>
    <Menu right className='header'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/">Profile</NavLink>
            <NavLink to="/">All Homes</NavLink>
            <NavLink to="/">Add Home</NavLink>
            <NavLink to="/">Log Out</NavLink>
    </Menu>
    <h1 onClick={handleOpen}>StayVibasdasdes</h1>
  </div>
)
}