import React, { useContext } from 'react'
import User from '../../../context/SocialNetwork'
import Menu from './Menu'
import LoginForm from './LoginForm'
import LogoutButton from './LogoutButton'

const Header = () => {
  const { user } = useContext(User)
  return (
    <div className="header">
      {user ?
        <><Menu /><LogoutButton /></> :
        <LoginForm />
      }
    </div>
  )
}

export default Header
