import React, { useState } from 'react'
import NewsFeed from './NewsFeed'
import UserProfile from './UserProfile'
import Page from './Page'
import Header from './Header'
import User from '../../context/SocialNetwork'


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

const SocialNetwork = () => {
  const [user, setUser] = useState(null)

  return (
    <User.Provider value={{ user, setUser }}>
      <Router>
        <Header />
        <div className="container">
          <Switch>
            <Route path="/page/:pageName" component={Page} />
            <Route path="/profile/:userName" component={UserProfile} />
            <Route path="/newsfeed" component={NewsFeed} />
            <Route path="/" component={NewsFeed} />
          </Switch>
        </div>
      </Router>
    </User.Provider>
  )

}

export default SocialNetwork