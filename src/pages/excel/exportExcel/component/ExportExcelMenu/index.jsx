import './index.less'
import { Checkbox, Input, Select, Form, Button } from 'antd'
import { useState } from 'react'
const ExportExcelMenu = (props) => {
  // const [fileType, setFileType] = useState('xlsx')
  // const [autoCell, setAutoCell] = useState(true)
  // const [compress, setCompress] = useState(false)
  const handleSubmit = (value) => {
    props.onExport(value)
  }
  // const handleChangeFileType = (value) => {
  //   // console.log(value)
  //   // setFileType(value)
  // }
  return (
    <div className="export-excel-options">
      <Form
        layout="inline"
        name="exportExcelMenu"
        // onFinish={(value) => props.onExport(value)}
        onFinish={handleSubmit}
      >
        <Form.Item label="标题" name="fileName">
          <Input placeholder="默认为 “表格”"></Input>
        </Form.Item>
        <Form.Item name="autoWidth" valuePropName="checked" initialValue={true}>
          <Checkbox>自适应单元格</Checkbox>
        </Form.Item>
        <Form.Item
          name="compression"
          valuePropName="checked"
          initialValue={false}
        >
          <Checkbox>压缩</Checkbox>
        </Form.Item>
        <Form.Item
          name="fileType"
          label="文件类型"
          initialValue="xlsx"
          // rules={[{ required: true, message: '选择文件类型!' }]}
        >
          <Select placeholder="选择文件类型" style={{ width: 80 }}>
            <Select.Option value="xlsx">xlsx</Select.Option>
            <Select.Option value="txt">txt</Select.Option>
            <Select.Option value="html">html</Select.Option>
            <Select.Option value="csv">csv</Select.Option>
          </Select>
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
export default ExportExcelMenu
