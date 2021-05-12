import { Upload, message } from 'antd'
import { InboxOutlined } from '@ant-design/icons'

const { Dragger } = Upload

// const props = {
//   name: 'file',
//   multiple: true,
//   action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
//   onChange(info) {
//     const { status } = info.file
//     if (status !== 'uploading') {
//       console.log(info.file, info.fileList)
//     }
//     if (status === 'done') {
//       message.success(`${info.file.name} file uploaded successfully.`)
//     } else if (status === 'error') {
//       message.error(`${info.file.name} file upload failed.`)
//     }
//   },
// }

// <Dragger {...props}>
// <p className="ant-upload-drag-icon">
//   <InboxOutlined />
// </p>
// <p className="ant-upload-text">Click or drag file to this area to upload</p>
// <p className="ant-upload-hint">
//   Support for a single or bulk upload. Strictly prohibit from uploading
//   company data or other band files
// </p>
// </Dragger>,

const UploadExcel = () => {
  return (
    <div>
      <Dragger>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">点击或拖拽文件到此处上传</p>
        <p className="ant-upload-hint">支持单个/批量上产，谨慎上传敏感数据</p>
      </Dragger>
    </div>
  )
}

export default UploadExcel
