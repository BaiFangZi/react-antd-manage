import NProgress from 'nprogress'
import 'nprogress/nprogress.css' // progress bar style
import { useEffect } from 'react'
import { Spin } from 'antd'
NProgress.configure({ showSpinner: false }) // NProgress Configuration

const Loading = () => {
  useEffect(() => {
    NProgress.start()
    return () => {
      NProgress.done()
    }
  }, [])
  return (
    <div>
      <Spin size="large" />
    </div>
  )
}

export default Loading
