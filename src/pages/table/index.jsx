import { useCallback, useEffect, useState } from 'react'
import { queryTableData } from '@/api/table'
// import { useRequest } from '@/utils/hooks'
import { Table, Button } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import TableMenu from '@/component/TableMenu'
const CTable = () => {
  console.log('重新渲染了')
  const [tableData, setTableData] = useState([])
  const [loading, setLoading] = useState(false)

  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    // total: 100,
  })
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: '用户名',
      dataIndex: 'name',
    },
    {
      title: '平台',
      dataIndex: 'platform',
    },
    {
      title: '升级次数',
      dataIndex: 'upgraded',
    },
    {
      title: '稳定性',
      dataIndex: 'star',
    },
    {
      title: '状态',
      dataIndex: 'status',
    },
    {
      title: '上次升级',
      dataIndex: 'date',
    },
    {
      title: '操作',
      dataIndex: 'operation',
      render: (_, record) => {
        return (
          <span>
            <Button
              type="primary"
              shape="circle"
              icon={<EditOutlined />}
            ></Button>
            <Button
              style={{
                marginLeft: 10,
              }}
              type="primary"
              danger
              shape="circle"
              icon={<DeleteOutlined />}
            ></Button>
          </span>
        )
      },
    },
  ]

  const handleTableChange = (pagination) => {
    const { current, pageSize } = pagination
    queryTable(pagination)
  }
  const queryTable = useCallback((pag) => {
    const { current, pageSize } = pag
    setLoading(true)
    queryTableData({ current, pageSize })
      .then((res) => {
        const { data, count } = res.data
        setTableData(data)
        setPagination({
          current,
          pageSize,
          total: count,
        })
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])
  // const queryTable = (current = 1, pageSize = 10) => {
  //   setLoading(true)
  //   queryTableData({ current, pageSize })
  //     .then((res) => {
  //       const { data, count } = res.data
  //       setTableData(data)
  //       setPagination({ ...pagination, total: count })
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  //     .finally(() => {
  //       setLoading(false)
  //     })
  // }
  useEffect(() => {
    queryTable(pagination)
  }, [queryTable])
  return (
    <div>
      <TableMenu></TableMenu>
      <Table
        columns={columns}
        rowKey={(record) => record.id}
        dataSource={tableData}
        pagination={pagination}
        loading={loading}
        onChange={handleTableChange}
      />
    </div>
  )
}

export default CTable
