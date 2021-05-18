import React from 'react'
import './login.less'
import { Form, Input, Button, message } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { loginIn } from '@/api/app'
import { connect } from 'react-redux'
import { login } from '@/store/actions/auth'
// import { setCookie } from '@/utils/auth'
const validatePWD = (rule, value) => {
  if (!value) {
    return Promise.reject('密码不能为空')
  } else if (!/^[a-zA-Z0-9]{4,12}$/.test(value)) {
    return Promise.reject('密码为4-12位英文和数字')
  } else {
    return Promise.resolve()
  }
}
const Login = (props) => {
  const handleSubmit = (value) => {
    console.log(props)
    const { login } = props

    login(value)
      .then((res) => {
        props.history.replace('/dashboard')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className="login-view">
      <Form
        className="login-form"
        name="normal_login"
        onFinish={handleSubmit}
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
            placeholder="用户：custome / 超管：admin"
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
            placeholder="123456"
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            登陆
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default connect((state) => state.user, { login })(Login)
// export default Login
