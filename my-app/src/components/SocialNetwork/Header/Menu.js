import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <ul className="menu">
      <li><NavLink to="/">Accueil</NavLink></li>
      <li><NavLink to="/profile">Mon Profile</NavLink></li>
    </ul>
  )
}

export default Menu
