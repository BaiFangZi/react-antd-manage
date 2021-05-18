import React, { useState, useEffect, useMemo } from 'react'
import { Menu, Layout } from 'antd'
import { Link, withRouter } from 'react-router-dom'
import {
  UserOutlined,
  // VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons'
import { routes } from '@/config/routes'
import { connect } from 'react-redux'

const SideBar = (props) => {
  const [menuNode, setMenuNode] = useState([])
  const { collapsed } = props
  const _curPath = props.location.pathname
  const [curPath, setCurpath] = useState(_curPath)

  const getMenuNodes = (routes) => {
    return routes.map((item) => {
      const { hidden, path, routes, text, roles } = item
      const curRole = props.token
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
              {getMenuNodes(routes)}
            </Menu.SubMenu>
          )
        }
      }
    })
  }

  useEffect(() => {
    let menu = getMenuNodes(routes)
    setMenuNode(menu)
  }, [])
  useEffect(() => {
    setCurpath(props.location.pathname)
  }, [props.location.pathname])

  return (
    <Layout.Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo" />
      <Menu theme="dark" mode="inline" selectedKeys={[curPath]}>
        {menuNode}
      </Menu>
    </Layout.Sider>
  )
}

// export default connect((state) => {
//   return {
//     ...state.app,
//     ...state.user,
//   }
// })(withRouter(SideBar))

export default connect(({ app, user }) => ({ ...user, ...app }))(
  withRouter(SideBar)
)
