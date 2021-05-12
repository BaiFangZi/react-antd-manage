import { Table } from 'antd'
import { useState } from 'react'
import { compose } from 'redux'
import ExportExcelMenu from './component/ExportExcelMenu'
const ExportExcel = () => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
  ]
  const data = []
  for (let i = 0; i < 46; i++) {
    data.push({
      key: i,
      name: `Edward King ${i}`,
      age: 32,
      address: `London, Park Lane no. ${i}`,
    })
  }
  const [selectedRowKeys, setSelectedRowKeys] = useState([])
  // const [modalVisible, setModalVisible] = useState(false)
  const handleSelectChange = (selectedRowKeys) => {
    setSelectedRowKeys(selectedRowKeys)
  }
  const handleExport = (options) => {
    const { autoWidth, compression, fileName, fileType } = options
    const exportHeader = ['key', 'name', 'age', 'address']

    let filterData = data.filter((i) => selectedRowKeys.includes(i.key))
    let _temp = filterData.length ? filterData : data
    let exportData = _temp.map((j) => [
      j['key'],
      j['name'],
      j['age'],
      j['address'],
    ])

    import('@/plugins/Export2Excel').then(({ export_json_to_excel }) => {
      export_json_to_excel({
        header: exportHeader,
        data: exportData,
        filename: fileName || '表格',
        compression,
        bookType: fileType,
        autoWidth,
      })
    })
  }
  return (
    <div>
      <ExportExcelMenu onExport={handleExport}></ExportExcelMenu>
      <Table
        columns={columns}
        dataSource={data}
        rowSelection={{
          selectedRowKeys,
          onChange: handleSelectChange,
        }}
      />
    </div>
  )
}
export default ExportExcel
