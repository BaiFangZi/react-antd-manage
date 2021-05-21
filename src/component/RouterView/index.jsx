import { Route } from 'react-router-dom'
const RouterView = (route) => {
  console.log(route)
  const { path, component, routes } = route
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
export default RouterView
