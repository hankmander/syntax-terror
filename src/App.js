import React from 'react'
import ProfileList from './components/ProfileList'
import CreateProfile from './components/CreateProfile'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'

export default function App () {
  return (
    <div >
      <Header />
      <div>
        <Switch>
          <Route exact path='/' component={ProfileList} />
          <Route path='/profiles/:id?' component={CreateProfile} />
        </Switch>
      </div>
    </div>
  )
}
