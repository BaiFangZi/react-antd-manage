// import {} from 'react'
import { Switch, Route } from 'react-router-dom'
// import { nestMenu } from '@/router/mapRoute'
const NestMenu = (props) => {
  console.log('nestmenu', props)
  const { routes } = props
  return (
    <div>
      <div>无限级菜单</div>
      <Switch>
        {routes.map((r) => {
          const { path, component } = r
          return <Route path={path} component={component} key={path}></Route>
        })}
      </Switch>
    </div>
  )
}

export default NestMenu
