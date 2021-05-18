// import {} from 'react'
import { Switch, Route } from 'react-router-dom'
// import { nestMenu } from '@/router/mapRoute'
const Level1_2 = (props) => {
  console.log(props)
  const { routes } = props
  return (
    <div>
      <div>level1_2</div>
      <Switch>
        {routes.map((r) => {
          const { path, component } = r
          return <Route path={path} component={component} key={path}></Route>
        })}
      </Switch>
    </div>
  )
}

export default Level1_2
