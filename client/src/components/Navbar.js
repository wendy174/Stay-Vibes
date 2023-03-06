import { React, useState } from 'react'
import { slide as Menu } from 'react-burger-menu'
import { NavLink } from 'react-router-dom';
import "../index.css"


export default function NavBar() {
  const [menuState, setMenuState] = useState(false)

  const handleOpen = () => {
      const newState = !menuState
      setMenuState(newState);
  }

return (
  <>
    <Menu right>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/">Profile</NavLink>
            <NavLink to="/">All Homes</NavLink>
            <NavLink to="/">Add Home</NavLink>
            <NavLink to="/">Log Out</NavLink>
    </Menu>
    <h1 onclick={handleOpen}id="logo">Stay Vibes Logo</h1>
  </>
)
}