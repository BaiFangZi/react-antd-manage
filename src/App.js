// import { Button } from 'antd'
import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
// import { Provider } from 'react-redux'
import Layout from './pages/layout'
import Login from './pages/login'

// import {} from
export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/" component={Layout}></Route>
        </Switch>
      </BrowserRouter>
    )
  }
}
