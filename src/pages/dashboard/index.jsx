import React from 'react'
import BarChart from './components/Barchart'
export default class Dashboard extends React.Component {
  render() {
    return (
      <div style={{ width: '100%', height: '100%' }}>
        <BarChart></BarChart>
      </div>
    )
  }
}
