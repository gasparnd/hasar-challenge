import React from 'react'
import {
  BrowserRouter, Switch, Route
} from 'react-router-dom'

import Login from './pages/Login'
import Gender from './pages/Gender'
import Register from './pages/Register'
import Main from './pages/Main'
import Header from './components/Header'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/genero">
          <Gender />
        </Route>
        <Route exact path="/datos">
          <Register />
        </Route>
        <Route exact path="/dia">
          <Main />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
