import { React, useState } from 'react'
import { stack as Menu } from 'react-burger-menu'
import { NavLink, useNavigate } from 'react-router-dom';
import "../index.css"
import Search from './Search';
import Logo from './images/Logo.png'
import Button from 'react-bootstrap/esm/Button';

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

  const handleLogout = () => {
    fetch("http://localhost:3000/logout", { method: 'DELETE' })
      .then(() => {
        navigate('/');
      })
      .catch((error) => console.error(error));
  };

return (
  <div className='header'>
    <div onClick={handleClick}>
      <img className='logo' src={Logo} alt='logo' onClick={handleOpen}/>
    </div>

    <Menu right > 
        <NavLink to="/">Home</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
        <NavLink to="/">All Homes</NavLink>
        {/* <NavLink to="/addhome">Add Home</NavLink> */}
        <NavLink onClick={handleLogout} to="/login">Log Out</NavLink>
       
    </Menu>
  </div>
)
}