import { Layout } from 'antd'
import {
  Route,
  Redirect,
  Switch,
  // BrowserRouter as Router,
} from 'react-router-dom'
// import { mainRoute } from '@/router/mapRoute'
import { routes } from '@/config/routes'
import Loadable from 'react-loadable'
import Loading from '@/component/Loading'
import NoMatch from '@/pages/error/404'
// import { Fragment } from 'react'
import { connect } from 'react-redux'
import RouterView from '@/component/RouterView'
import { filterAuthRouter } from '@/utils'
const Content = (props) => {
  console.log(props)
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
        {filterAuthRouter(routes, props.cookie).map((route) => (
          <RouterView key={route.path} {...route} />
        ))}
        <Route path="*" component={NoMatch}></Route>
      </Switch>
    </Layout.Content>
  )
}
export default connect((state) => state.user)(Content)
