import { Layout } from 'antd'
import { Route, Redirect, Switch } from 'react-router-dom'
import { mainRoute } from '@/router/mapRoute'
// import { Fragment } from 'react'
const Content = () => {
  const createContent = () => {
    let router = mainRoute.map((r) => (
      <Route path={r.path} component={r.component} key={r.path}></Route>
    ))
    return router
  }

  return (
    <Layout.Content
      className="site-layout-background"
      style={{
        margin: '24px 16px',
        padding: 24,
        minHeight: 280,
      }}
    >
      <Switch>
        <Redirect exact path="/" to="/dashboard"></Redirect>
        {createContent()}
      </Switch>
    </Layout.Content>
  )
}
export default Content
