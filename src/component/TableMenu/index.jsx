import './index.less'
import { Button, Divider, Input } from 'antd'
const TableMenu = () => {
  const { Search } = Input
  const handleSearch = () => {}
  return (
    <div className="table-menu-wrapper">
      <Button type="primary">添加</Button>
      <Search
        className="table-menu-search"
        placeholder="输入搜索内容"
        allowClear
        enterButton="搜索"
        size="middle"
        onSearch={handleSearch}
      />
    </div>
  )
}

export default TableMenu
