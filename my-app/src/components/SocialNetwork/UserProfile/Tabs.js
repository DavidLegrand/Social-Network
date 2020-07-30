import React from 'react'
import { NavLink, Route } from 'react-router-dom'
import Friends from './Friends'
import Posts from './Posts'
import Pages from './Pages'
import Details from './Details'

const Tabs = ({ match, details, friends, posts, likes }) => {
  return (<>
    <ul className="tabs">
      <li><NavLink to={`${match.url}/infos`} active="active" >Infos</NavLink></li>
      <li><NavLink to={`${match.url}/friends`} active="active" >Amis</NavLink></li>
      <li><NavLink to={`${match.url}/posts`} active="active" >Publications</NavLink></li>
      <li><NavLink to={`${match.url}/pages`} active="active" >Pages</NavLink></li>
    </ul>
    <div className="section">
      <Route path={match.url} exact></Route>
      <Route path={`${match.url}/infos`} component={() => <Details details={details} />} />
      <Route path={`${match.url}/friends`} component={() => <Friends friends={friends} />} />
      <Route path={`${match.url}/posts`} component={() => <Posts posts={posts} />} />
      <Route path={`${match.url}/pages`} component={() => <Pages likes={likes} />} />
    </div>
  </>
  )
}

export default Tabs
