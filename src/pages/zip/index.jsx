import { Table } from 'antd'
import { useState } from 'react'
import ExportZipMenu from './component/ExportZipMenu'
const ExportZip = () => {
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
  const [loading, setLoading] = useState(false)
  const handleSelectChange = (selectedRowKeys) => {
    setSelectedRowKeys(selectedRowKeys)
  }
  const handleExport = (options) => {
    setLoading(true)
    const { fileName = '未命名', fileType, txtName = 'myTxt' } = options
    const exportHeader = ['key', 'name', 'age', 'address']
    let filterData = data.filter((i) => selectedRowKeys.includes(i.key))
    let _temp = filterData.length ? filterData : data
    let exportData = _temp.map((j) => [
      j['key'],
      j['name'],
      j['age'],
      j['address'],
    ])

    import('@/plugins/Export2Zip').then(({ export_txt_to_zip }) => {
      // exportData 是数组
      export_txt_to_zip(exportHeader, exportData, txtName, fileName)
      setLoading(false)
    })
  }
  return (
    <div>
      <ExportZipMenu onExport={handleExport}></ExportZipMenu>
      <Table
        loading={loading}
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
export default ExportZip
