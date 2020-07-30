import React from 'react'
import Title from '../Title'

const Infos = ({user, banner}) => {
  return (
    <div className="banner" style={{backgroundImage: `url(${banner})`}}>
      <img src={user.avatar} className="avatar" />
      <Title>{user ? `${user.firstName} ${user.lastName} (${user.userName})` : ''}</Title>
    </div>
  )
}

export default Infos
