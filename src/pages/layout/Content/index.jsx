import { Layout } from 'antd'
import { Route, Redirect, Switch } from 'react-router-dom'
import { mainRoute } from '@/router/mapRoute'
import { routes } from '@/config/routes'
import Loadable from 'react-loadable'
import Loading from '@/component/Loading'
// import { Fragment } from 'react'
import { connect } from 'react-redux'

const RouteWithSubRoutes = (route) => {
  const { path, component, routes } = route
  console.log(route)
  return (
    <Route
      path={path}
      // exact
      render={(props) => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={routes} />
      )}
    />
  )
}

const Content = (props) => {
  const filterRoute = (curRoute, role) => {
    const { routes, roles } = curRoute
    if (roles.includes(role)) {
      return true
    } else if (routes) {
      return routes.some(({ roles }) => roles.includes(role))
    }
    return false
  }

  const getContent = (routes) => {
    const curRole = props.token
    let content = routes.reduce((pre, item) => {
      const { routes, ...rest } = item
      if (filterRoute(item, curRole)) {
        if (routes) {
          pre.push({
            ...rest,
            routes: getContent(routes),
          })
        }
        pre.push(item)
      }
      return pre
    }, [])
    return content
  }
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
        {getContent(routes).map((route) => {
          return <RouteWithSubRoutes key={route.path} {...route} />
        })}
        <Redirect to="/error/404" />
      </Switch>
    </Layout.Content>
  )
}
export default connect((state) => state.user)(Content)
