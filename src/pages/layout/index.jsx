import React from 'react'
import { Layout } from 'antd'
import './index.less'
import Header from './Header'
import SideBar from './SideBar'
import Content from './Content'
//路由组件
import { connect } from 'react-redux'

class AppLayout extends React.Component {
  render() {
    return (
      <Layout className="layout">
        <SideBar></SideBar>
        <Layout className="site-layout">
          <Header></Header>
          <Content></Content>
        </Layout>
      </Layout>
    )
  }
}

export default connect()(AppLayout)
