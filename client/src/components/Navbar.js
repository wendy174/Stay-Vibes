// import React from "react";
// import Search from "./Search";
// import { NavLink } from 'react-router-dom'

// export default function Navbar(){
//     return(
//         <div>
//             <a href="/">Stay Vibes</a>
//                     <a href="/">All Homes</a>
//                     <a href="/">Add Home</a>
//                     <a href="/">My Profile</a>
//                     <NavLink to="/">Home</NavLink>
//                     <a href="/">Logout</a>
//                 <Search/>
//         </div>
//     )
// }

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
    <h1 id="logo">Stay Vibes Logo</h1>
  </>
)
}