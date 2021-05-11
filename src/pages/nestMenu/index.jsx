// import {} from 'react'
import { Switch, Route } from 'react-router-dom'
import { nestMenu } from '@/router/mapRoute'
const NestMenu = () => {
  return (
    <div>
      <div>无限级菜单</div>
      <Switch>
        {nestMenu.map((r) => (
          <Route path={r.path} component={r.component}></Route>
        ))}
      </Switch>
    </div>
  )
}

export default NestMenu
