import React from 'react'
import { Menu, Layout } from 'antd'
import { Link, withRouter } from 'react-router-dom'
import {
  UserOutlined,
  // VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons'
import { routes } from '@/config/routes'
import { connect } from 'react-redux'
// import { routes } from '../../../router'
class SideBar extends React.Component {
  state = {
    curOpenSub: '',
    menuNodes: null,
  }
  getMenuNodes = (routes) => {
    // console.log(2)
    return routes.map((item) => {
      const { path, routes, text } = item
      if (!routes) {
        return (
          <Menu.Item key={path} icon={<UserOutlined />}>
            <Link to={path}>{text}</Link>
          </Menu.Item>
        )
      } else {
        // debugger
        const curPath = this.props.location.pathname
        let cItem = routes.find((i) => i.path === curPath)
        if (cItem) {
          this.setState({
            curOpenSub: path,
          })
        }

        return (
          <Menu.SubMenu key={path} icon={<UploadOutlined />} title={text}>
            {this.getMenuNodes(routes)}
          </Menu.SubMenu>
        )
      }
    })
  }
  componentWillMount() {
    this.setState({
      menuNodes: this.getMenuNodes(routes),
    })
  }
  render() {
    const { Sider } = Layout
    const curPath = this.props.location.pathname
    const curOpenSub = this.state.curOpenSub
    const { collapsed } = this.props
    return (
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[curPath]}
          defaultOpenKeys={[curOpenSub]}
        >
          {this.state.menuNodes}
        </Menu>
      </Sider>
    )
  }
}
export default connect((state) => state.app)(withRouter(SideBar))
