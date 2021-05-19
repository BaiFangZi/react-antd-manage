import React, { useReducer } from 'react'
import { connect } from 'react-redux'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Layout, Menu, Dropdown, Avatar } from 'antd'
import { toggleSidebar } from '@/store/actions/app'
import HeaderDropDown from './component/HeaderDropDown'
const Header = (props) => {
  // const []
  console.log(props)
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
      <HeaderDropDown />
      {/* <Dropdown overlay={menu} trigger={['click']}>
        <Avatar
          style={{
            backgroundColor: '#87d068',
            margin: '16px',
          }}
          icon={<UserOutlined />}
        />
      </Dropdown> */}
    </Layout.Header>
  )
}
export default connect((state) => state.app, { toggleSidebar })(Header)
