import React from 'react'
import { Layout } from 'antd'
import { Route, Redirect, Switch } from 'react-router-dom'
import './index.less'
import Header from './Header'
import SideBar from './SideBar'

//路由组件
import Category from '../category'
import Dashboard from '../dashboard'
import Product from '../product'
import Chart from '../chart'
import Chart1 from '../chart/chart1'

import { connect } from 'react-redux'

class AppLayout extends React.Component {
  render() {
    console.log(this.props)
    const { Content } = Layout
    return (
      <Layout className="layout">
        <SideBar></SideBar>
        <Layout className="site-layout">
          <Header></Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            <Switch>
              <Redirect exact path="/" to="/dashboard"></Redirect>
              <Route path="/dashboard" component={Dashboard}></Route>
              <Route path="/category" component={Category}></Route>
              <Route path="/product" component={Product}></Route>
              <Route path="/chart/chart1" component={Chart1}></Route>
              {/* <Redirect to="/dashboard"></Redirect> */}
            </Switch>
          </Content>
        </Layout>
      </Layout>
    )
  }
}

export default connect()(AppLayout)
