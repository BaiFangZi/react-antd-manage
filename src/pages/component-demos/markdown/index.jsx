import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { Card, Row, Col, Input } from 'antd'

const MarkDown = () => {
  // let text = ''
  const [text, setText] = useState('')
  const handleChange = (e) => {
    // console.log(textArea)
    setText(e.target.value)
  }
  return (
    <Row gutter={10}>
      <Col span={12}>
        <Card
          title="输入markdown"
          bodyStyle={{ minHeight: 400, height: '100%' }}
        >
          <Input.TextArea
            onChange={handleChange}
            autoSize={{ minRows: 10 }}
          ></Input.TextArea>
        </Card>
      </Col>
      <Col span={12}>
        <Card title="转化成文本" bodyStyle={{ minHeight: 400 }}>
          <ReactMarkdown children={text}></ReactMarkdown>
        </Card>
      </Col>
    </Row>
  )
}

export default MarkDown
