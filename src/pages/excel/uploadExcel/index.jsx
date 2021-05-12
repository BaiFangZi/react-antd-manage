import { Upload, message, Divider } from 'antd'
import { InboxOutlined } from '@ant-design/icons'
import PreviewExcel from './component/previewExcel'
import { useState } from 'react'
import XLSX from 'xlsx'

const { Dragger } = Upload
const UploadExcel = () => {
  const [excelData, setExcelData] = useState([])
  const [preFileName, setPreFileName] = useState('')
  const uploadProps = () => {
    return {
      name: 'file12121', //文件对象的key
      multiple: true,
      accept: '.xlsx, .xls, .csv', //上传文件限制
      action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
      onChange(info) {
        // console.log(info)
        const { status } = info.file
        if (status !== 'uploading') {
          // console.log(info.file, info.fileList)
        }
        if (status === 'done') {
          message.success(`${info.file.name} 文件上传成功.`)
        } else if (status === 'error') {
          message.error(`${info.file.name} 文件上传失败.`)
        }
      },
      beforeUpload(file, fileList) {
        //添加上传前的某些校验
        if (!/\.(xlsx|xls|csv)$/.test(file.name)) {
          message.error('仅支持上传.xlsx, .xls, .csv 文件')
          return false
        }
      },
      onPreview(e) {
        const { name } = e.originFileObj
        readerData(e.originFileObj).then(() => {
          setPreFileName(name)
        })
      },
      onRemove(e) {
        console.log(preFileName)
        // console.log(e)
        const delFileName = e.name
        if (delFileName === preFileName) {
          setExcelData([])
          setPreFileName('')
        }
        // console.log(12121)
        // if()
      },
      customRequest(e) {
        const { name } = e.file
        readerData(e.file).then(() => {
          e.onSuccess()
          setPreFileName(name)
        })
      },
    }
  }

  const readerData = (rawFile) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = (e) => {
        const data = e.target.result
        const workbook = XLSX.read(data, { type: 'binary' })
        const worksheet = workbook.Sheets.SheetJS
        const result = XLSX.utils.sheet_to_json(worksheet)
        // console.log(result)
        setExcelData(result)
        resolve()
      }
      // reader.readAsArrayBuffer(rawFile)
      reader.readAsBinaryString(rawFile)
    })
  }
  return (
    <div>
      <Dragger {...uploadProps()}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">点击或拖拽文件到此处上传</p>
        <p className="ant-upload-hint">
          支持单个/批量上产，别上传敏感数据，文件名包含特殊字符可能导致上传失败！
        </p>
      </Dragger>
      {preFileName && <Divider plain>正在预览 {preFileName}</Divider>}
      <PreviewExcel excelData={excelData}></PreviewExcel>
    </div>
  )
}

export default UploadExcel
