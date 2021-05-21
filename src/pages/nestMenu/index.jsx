// import {} from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { filterAuthRouter } from '@/utils'
import RouterView from '@/component/RouterView'

// import { nestMenu } from '@/router/mapRoute'
const NestMenu = (props) => {
  console.log('nestmenu', props)
  const { routes } = props
  return (
    <div>
      <div>无限级菜单</div>
      <Switch>
        {filterAuthRouter(routes, props.cookie).map((route) => (
          <RouterView key={route.path} {...route} />
        ))}
      </Switch>
    </div>
  )
}

export default connect((state) => state.user)(NestMenu)
