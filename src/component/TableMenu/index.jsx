import './index.less'
import { Input } from 'antd'
const TableMenu = () => {
  const { Search } = Input
  const handleSearch = () => {}
  return (
    <div className="table-search-wrapper">
      <Search
        className="table-input-search"
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
