import { Layout } from 'antd'
import { Route, Redirect, Switch } from 'react-router-dom'
import { mainRoute } from '@/router/mapRoute'
import { routes } from '@/config/routes'
import Loadable from 'react-loadable'
import Loading from '@/component/Loading'
// import { Fragment } from 'react'
import { lazy } from 'react'

// const RComponent = (path) => {
//   console.log(path)
//   return Loadable({
//     loader: () => import(path),
//     loading: Loading,
//   })
// }

const RouteWithSubRoutes = (route) => {
  const { path, component, routes } = route
  console.log(route)
  return (
    <Route
      path={path}
      // component={lazy(() => import(component))}
      render={(props) => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={routes} />
      )}
    />
  )
}

const Content = () => {
  // const createContent = () => {
  //   let router = routes.map((r) => (
  //     <Route path={r.path} component={r.component} key={r.path}></Route>
  //   ))
  //   return router
  // }

  return (
    <Layout.Content
      // className="site-layout-background"
      style={{
        margin: '24px 16px',
        padding: 24,
        minHeight: 280,
        background: '#fff',
      }}
    >
      <Switch>
        <Redirect exact path="/" to="/dashboard"></Redirect>
        {routes.map((route, i) => {
          return <RouteWithSubRoutes key={i} {...route} />
        })}
      </Switch>
    </Layout.Content>
  )
}
export default Content
