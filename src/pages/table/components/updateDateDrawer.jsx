import React from 'react'
import { Drawer } from 'antd'

const UpdateDataDrawer = (props) => {
  const { visible } = props
  // const handleClose = () => {

  // }
  return (
    <>
      <Drawer
        title="Basic Drawer"
        placement="right"
        onClose={() => props.onClose()}
        visible={visible}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  )
}
export default UpdateDataDrawer
