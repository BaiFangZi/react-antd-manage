import { Table } from 'antd'
// import { useState } from 'react'

const PreviewExcel = (props) => {
  const { excelData } = props
  // const [tableData, setTableData] = useState([])
  const tableData = excelData.map((i) => {
    const { __rowNum__, ...data } = i
    return data
  })
  const columns = Object.keys(tableData[0] || {}).map((i) => ({
    title: i,
    dataIndex: i,
  }))
  return (
    <div>
      <Table columns={columns} dataSource={tableData}></Table>
    </div>
  )
}
export default PreviewExcel
