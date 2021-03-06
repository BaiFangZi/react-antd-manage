import { Result, Button } from 'antd'

const _404 = () => {
  const goHome = (props) => {
    props.history.push('/dashboard')
  }

  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Button type="primary">Back Home</Button>}
    />
  )
}
export default _404
