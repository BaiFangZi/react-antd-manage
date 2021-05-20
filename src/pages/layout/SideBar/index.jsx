import React, { useState, useEffect, useMemo, Fragment } from 'react'
import { Menu, Layout } from 'antd'
import { Link, withRouter } from 'react-router-dom'
import {
  UserOutlined,
  // VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons'
import { routes } from '@/config/routes'
import { connect } from 'react-redux'

const MenuNodes = (routes, role) => {
  return routes.map((item) => {
    const { hidden, path, routes, text, roles } = item
    const curRole = role
    if (roles.includes(curRole)) {
      if (!routes) {
        if (!hidden) {
          return (
            <Menu.Item key={path} icon={<UserOutlined />}>
              <Link to={path}>{text}</Link>
            </Menu.Item>
          )
        }
      } else {
        return (
          <Menu.SubMenu key={path} icon={<UploadOutlined />} title={text}>
            {MenuNodes(routes, role)}
          </Menu.SubMenu>
        )
      }
    }
  })
}

const SideBar = (props) => {
  // console.log('1212112212212', props)
  const [menuNode, setMenuNode] = useState([])
  const { collapsed } = props
  const _curPath = props.location.pathname
  const [curPath, setCurpath] = useState(_curPath)

  useEffect(() => {
    setCurpath(props.location.pathname)
  }, [props.location.pathname])

  return (
    <Layout.Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo" />
      <Menu theme="dark" mode="inline" selectedKeys={[curPath]}>
        {MenuNodes(routes, props.cookie).map((item) => item)}
      </Menu>
    </Layout.Sider>
  )
}

export default connect(({ app, user }) => ({ ...user, ...app }))(
  withRouter(SideBar)
)
