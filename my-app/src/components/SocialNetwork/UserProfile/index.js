import React, { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Infos from './Infos'
import Tabs from './Tabs'
import User from '../../../context/SocialNetwork'
import { useFetch } from '../../../hooks'

const UserProfile = ({ match }) => {
  const { user } = useContext(User)

  const { userName } = useParams()

  const [fetchedUser, setFetchedUser] = useState(null)
  const [details, setDetails] = useState(null)
  const [posts, setPosts] = useState(null)
  const [likes, setLikes] = useState(null)
  const [friends, setFriends] = useState(null)
  
  const [endPoint, setEndPoint] = useState('')

  useFetch("http://localhost:5000/users?userName=" + userName, setFetchedUser)

  useEffect(() => {
    if (fetchedUser && fetchedUser !== null) {
      setEndPoint("http://localhost:5000/users/" + fetchedUser._id)
    }
  }, [fetchedUser])


  useFetch(endPoint + "/details", setDetails)
  useFetch(endPoint + "/friends", setFriends)
  useFetch(endPoint + "/likes", setLikes)
  useFetch(endPoint + "/posts", setPosts)

  return (
    <>
      {fetchedUser && details && <Infos user={fetchedUser} banner={details.coverPicture} />}
      {friends && likes && posts && details &&
        <Tabs match={match} friends={friends} likes={likes} posts={posts} details={details} />}

    </>
  )
}

export default UserProfile
