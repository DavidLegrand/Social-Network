import React from 'react'
import { useParams } from 'react-router-dom'

const UserProfile = () => {
  const { userName } = useParams()
  return (
    <div>UserProfile works : {userName}</div>
  )
}

export default UserProfile
