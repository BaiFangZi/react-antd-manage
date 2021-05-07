import React from 'react'
import './login.less'
import { Form, Input, Button } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
// import { compose } from 'redux'

const LoginForm = (props) => {
  // console.log(props)
  const validatePWD = (rule, value) => {
    if (!value) {
      return Promise.reject('密码不能为空')
    } else if (!/^[a-zA-Z0-9]{4,12}$/.test(value)) {
      return Promise.reject('密码为4-12位英文和数字')
    } else {
      return Promise.resolve()
    }
  }
  const onFinish = (values) => {
    //提交表单且数据验证成功后回调事件
    // console.log('Received values of form: ', values)
    // console.log(props)
    props.history.push('/admin')
  }
  return (
    <div className="login-view">
      <Form
        className="login-form"
        name="normal_login"
        onFinish={onFinish}
        initialValues={{ remember: true }}
      >
        <Form.Item
          name="username"
          rules={[
            { required: true, message: '用户名不能为空' }, //声明多个ruleItem
            {
              pattern: /^[a-zA-Z0-9]{4,12}$/,
              message: '用户名4-12位英文和数字',
            },
          ]}
        >
          <Input
            prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              validator: validatePWD, //自定义validator写法
            },
          ]}
        >
          <Input
            prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default class Login extends React.Component {
  // constructor() {
  //   super()
  // }
  render() {
    return <LoginForm history={this.props.history} />
  }
}
