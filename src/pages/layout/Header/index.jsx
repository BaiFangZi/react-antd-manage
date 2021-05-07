import React from 'react'
import { connect } from 'react-redux'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import { Layout } from 'antd'
import { toggleSidebar } from '../../../store/actions/app'
// import PropTypes from 'prop-types'
class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { Header } = Layout
    // console.log(this.props)
    const { collapsed, toggleSidebar } = this.props
    return (
      <Header className="site-layout-background" style={{ padding: 0 }}>
        {React.createElement(
          collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
          {
            className: 'trigger',
            onClick: () => {
              toggleSidebar(12)
            },
          }
        )}
      </Header>
    )
  }
}

export default connect((state) => state.app, { toggleSidebar })(Header)
