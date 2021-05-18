import React, { useReducer } from 'react'
import { connect } from 'react-redux'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Layout, Menu, Dropdown, Avatar } from 'antd'
import { toggleSidebar } from '@/store/actions/app'

const menu = (
  <Menu>
    <Menu.Item key="userCenter">
      <a href="https://www.antgroup.com">个人中心</a>
    </Menu.Item>
    <Menu.Item key="setting">
      <a href="https://www.aliyun.com">系统设置</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="loginOut">退出登陆</Menu.Item>
  </Menu>
)

const Header = (props) => {
  // const []
  const { collapsed, toggleSidebar } = props
  return (
    <Layout.Header
      style={{
        padding: 0,
        background: '#fff',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        onClick: () => {
          toggleSidebar()
        },
      })}
      <Dropdown overlay={menu} trigger={['click']}>
        <Avatar
          style={{
            backgroundColor: '#87d068',
            margin: '16px',
          }}
          icon={<UserOutlined />}
        />
      </Dropdown>
    </Layout.Header>
  )
}
export default connect((state) => state.app, { toggleSidebar })(Header)
