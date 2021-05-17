import { Switch, Route } from 'react-router-dom'
const Auth = (props) => {
  const { routes } = props
  return (
    <div>
      <div>权限管理</div>
      <Switch>
        {routes.map((r) => {
          const { path, component } = r
          return <Route path={path} component={component} key={path}></Route>
        })}
      </Switch>
    </div>
  )
}
export default Auth
