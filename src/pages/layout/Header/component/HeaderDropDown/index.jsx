import { Dropdown, Menu, Avatar } from 'antd'
import { DownOutlined, UserOutlined } from '@ant-design/icons'
import { withRouter } from 'react-router-dom'
import { loginOut } from '@/store/actions/auth'
import './index.less'
import { connect } from 'react-redux'
const HeaderDropDown = (props) => {
  const CMenu = () => {
    return (
      <Menu onClick={handleClickMenuItem}>
        <Menu.Item key="userCenter">
          <span>个人中心</span>
        </Menu.Item>
        <Menu.Item key="sysSetting">
          <span>系统设置</span>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="loginOut">
          <span>退出登陆</span>
        </Menu.Item>
      </Menu>
    )
  }
  const handleClickMenuItem = ({ key }) => {
    switch (key) {
      case 'userCenter':
        props.history.push('/userCenter')
        break
      case 'sysSetting':
        props.history.push('/sysSetting')
        break
      case 'loginOut':
        {
          // console.log(props)
          const { loginOut, history } = props

          loginOut().then(() => {
            history.replace('/login')
          })
        }
        break
    }
  }

  return (
    <Dropdown overlay={CMenu} trigger={['click']}>
      <span onClick={(e) => e.preventDefault()}>
        <Avatar
          style={{
            backgroundColor: '#87d068',
            margin: '16px 40px',
            cursor: 'pointer',
          }}
          icon={<UserOutlined />}
        />
      </span>
    </Dropdown>
  )
}

export default connect(null, { loginOut })(withRouter(HeaderDropDown))
