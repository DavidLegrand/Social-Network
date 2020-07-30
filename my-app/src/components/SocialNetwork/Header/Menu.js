import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import User from '../../../context/SocialNetwork'

const Menu = () => {
  const { user } = useContext(User)
  return (
    <ul className="menu">
      <li><NavLink to="/">Accueil</NavLink></li>
      <li><NavLink to={'/profile/' + user.userName}>
        Mon Profil </NavLink></li>
      <li><NavLink to={'/profile/' + user.userName}>
        <img src={user.avatar} className="mini-avatar" /></NavLink></li>
    </ul>
  )
}

export default Menu
