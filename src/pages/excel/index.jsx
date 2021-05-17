// import {} from 'react'
import { Switch, Route } from 'react-router-dom'
// import { nestMenu } from '@/router/mapRoute'
const Excel = (props) => {
  const { routes } = props
  console.log(props)
  return (
    <div>
      {/* 1212 */}
      <Switch>
        {routes.map((r) => {
          const { path, component } = r
          return <Route path={path} component={component} key={path}></Route>
        })}
      </Switch>
    </div>
  )
}

export default Excel
