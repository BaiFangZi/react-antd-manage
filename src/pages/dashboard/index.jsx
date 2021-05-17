import React from 'react'
// import BarChart from './components/Barchart'
import LineChart from './components/LineChart'
import { Row, Col, Card, Statistic, Space } from 'antd'
import { LikeOutlined, ArrowUpOutlined } from '@ant-design/icons'
const Dashboard = () => {
  const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30 // Moment is also OK
  const { Countdown } = Statistic

  return (
    <div>
      <Row justify="space-between" gutter={16}>
        <Col span={6}>
          <Card>
            <Statistic
              title="Feedback"
              value={1128}
              prefix={<LikeOutlined />}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic title="Unmerged" value={93} suffix="/ 100" />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Countdown
              title="Million Seconds"
              value={deadline}
              format="HH:mm:ss:SSS"
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="Active"
              value={11.28}
              precision={2}
              valueStyle={{ color: '#3f8600' }}
              prefix={<ArrowUpOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
      </Row>
      {/* <Row style={{ marginTop: 20 }}>
        <Col span={24}>
          <Card>
            <BarChart></BarChart>
          </Card>
        </Col>
      </Row> */}
      {/* <Row>
        <Col span={12}>
          <Card>
            <LineChart></LineChart>
          </Card>
        </Col>
      </Row> */}
    </div>
  )
}

export default Dashboard
