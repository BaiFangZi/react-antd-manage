import './index.less'
import { Checkbox, Input, Select, Form, Button } from 'antd'

const ExportZipMenu = (props) => {
  const handleSubmit = (value) => {
    props.onExport(value)
  }
  return (
    <div className="export-zip-options">
      <Form layout="inline" name="exportExcelMenu" onFinish={handleSubmit}>
        <Form.Item label="标题" name="fileName">
          <Input placeholder="被包裹的文件名"></Input>
        </Form.Item>
        <Form.Item label="Zip名称" name="textName">
          <Input placeholder="导出zip文件名"></Input>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            导出
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default ExportZipMenu
