import React, { useContext } from 'react'
import User from '../../../context/SocialNetwork'

const LogoutButton = () => {
  const { setUser } = useContext(User)
  return (
    <div>
      <button onClick={()=>{setUser(null)}}>Déconnexion</button>
    </div>
  )
}

export default LogoutButton
