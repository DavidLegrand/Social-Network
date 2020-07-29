import React, { useEffect, useState, useContext } from 'react'
import User from '../../../context/SocialNetwork'
import { useFetch } from '../../../hooks'

const LoginForm = () => {
  const [login, setlogin] = useState("")
  const [password, setpassword] = useState("")
  const [endpoint, setendpoint] = useState(null)
  const [fetcheduser, setfetcheduser] = useState(null)
  const { setUser } = useContext(User)

  useFetch(endpoint, setfetcheduser)

  useEffect(() => {
    if (fetcheduser)
      checkPassword()
  }, [fetcheduser, password])

  const checkPassword = () => {
    //console.log("mdp tapé : ", password, "mdp bdd : ", fetcheduser[0].password)
    if (password === fetcheduser.password){
      setUser(fetcheduser)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (login) {
      setendpoint("http://localhost:5000/users?userName=" + login)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="login" placeholder="Nom d'utilisateur" value={login} onChange={e => setlogin(e.target.value)} />
        <input type="password" name="password" placeholder="Mot de passe" value={password} onChange={e => setpassword(e.target.value)} />
        <button type="submit">Connexion</button>
      </form>
    </div>
  )
}

export default LoginForm
