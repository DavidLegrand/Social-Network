import React, { useContext } from 'react'
import User from '../../../context/SocialNetwork'
import Menu from './Menu'
import LoginForm from './LoginForm'
import LogoutButton from './LogoutButton'

const Header = () => {
  const { user } = useContext(User)
  return (
    <div className="header">
      <div className="container">
      {user ?
        <><Menu /><LogoutButton /></> :
        <LoginForm />
      }
      </div>
    </div>
  )
}

export default Header
