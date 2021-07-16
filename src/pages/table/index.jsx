import { useCallback, useEffect, useMemo, useState } from 'react'
import { queryTableData } from '@/api/table'
// import { useRequest } from '@/utils/hooks'
import { Table, Button, Tag, Popconfirm } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import TableMenu from '@/component/TableMenu'
import AddDataDialog from './components/AddDataDialog'
import UpdateDataDrawer from './components/updateDateDrawer'
import './index.less'

const CTable = () => {
  console.log('重新渲染了')
  // let visible = false
  const [visible, setVisible] = useState(false)
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
      render(_, record) {
        return record.status ? (
          <Tag color="#87d068">运行中</Tag>
        ) : (
          <Tag color="#f50">关闭</Tag>
        )
      },
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
              onClick={() => handleUpdate(record)}
            ></Button>
            {tableData.length >= 1 ? (
              <Popconfirm
                title="确认删除这个记录吗"
                onConfirm={() => handleDelete(record)}
              >
                <Button
                  style={{
                    marginLeft: 10,
                  }}
                  type="primary"
                  danger
                  shape="circle"
                  icon={<DeleteOutlined />}
                ></Button>
              </Popconfirm>
            ) : null}
          </span>
        )
      },
    },
  ]

  const handleTableChange = (pagination) => {
    const { total, ...page } = pagination
    // setPagination(page)
    queryTable(page)
  }
  const handleDelete = (record) => {
    console.log(record)
  }
  const handleUpdate = (record) => {
    // visible = true
    setVisible(true)
  }
  const handleClose = () => {
    setVisible(false)
  }
  // const queryTable = useMemo(() => {
  //   const { current, pageSize } = pagination
  //   setLoading(true)
  //   queryTableData({ current, pageSize })
  //     .then((res) => {
  //       const { data, count } = res.data
  //       setTableData(data)
  //       setPagination({
  //         current,
  //         pageSize,
  //         total: count,
  //       })
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  //     .finally(() => {
  //       setLoading(false)
  //     })
  // }, [pagination.current, pagination.pageSize])

  const queryTable = useCallback((page) => {
    setLoading(true)
    const { current, pageSize } = page
    // console.log(page)
    queryTableData({ current, pageSize })
      .then((res) => {
        const { data, count } = res.data
        setTableData(data)
        setPagination({ ...page, total: count })
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    queryTable(pagination)
  }, [queryTable])
  return (
    <div>
      <div className="table-menu">
        <AddDataDialog></AddDataDialog>
        <TableMenu></TableMenu>
      </div>
      <Table
        columns={columns}
        rowKey={(record) => record.id}
        dataSource={tableData}
        pagination={pagination}
        loading={loading}
        onChange={handleTableChange}
      />
      <UpdateDataDrawer
        onClose={handleClose}
        visible={visible}
      ></UpdateDataDrawer>
    </div>
  )
}

export default CTable
