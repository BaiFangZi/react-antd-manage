// import { Component } from "react"
// import echarts from '@/lib/echarts'
import echarts from '@/lib/echarts'
import { PropTypes } from 'prop-types'

import React, { Component } from 'react'

export default class BarChart extends Component {
  static propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    className: PropTypes.string,
    styles: PropTypes.object,
  }
  static defaultProps = {
    width: '100%',
    height: '300px',
    styles: {},
    className: '',
  }
  state = {
    chart: null,
  }
  chartDom = React.createRef()
  initChart = () => {
    console.log(this.chartDom)
    this.setState(
      {
        chart: echarts.init(this.chartDom.current),
      },
      () => {
        console.log(this.state.chart)

        this.state.chart.setOption({
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              // 坐标轴指示器，坐标轴触发有效
              type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
            },
          },
          grid: {
            top: 10,
            left: '2%',
            right: '2%',
            bottom: '3%',
            containLabel: true,
          },
          xAxis: [
            {
              type: 'category',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              axisTick: {
                alignWithLabel: true,
              },
            },
          ],
          yAxis: [
            {
              type: 'value',
              axisTick: {
                show: false,
              },
            },
          ],
          series: [
            {
              name: 'pageA',
              type: 'bar',
              stack: 'vistors',
              barWidth: '60%',
              data: [79, 52, 200, 334, 390, 330, 220],
            },
            {
              name: 'pageB',
              type: 'bar',
              stack: 'vistors',
              barWidth: '60%',
              data: [80, 52, 200, 334, 390, 330, 220],
            },
            {
              name: 'pageC',
              type: 'bar',
              stack: 'vistors',
              barWidth: '60%',
              data: [30, 52, 200, 334, 390, 330, 220],
            },
          ],
        })
      }
    )
  }
  resize() {
    const chart = this.state.chart
    if (chart) {
      chart.resize()
    }
  }
  componentWillUnmount() {}
  componentDidMount() {
    this.initChart()
    window.addEventListener('resize', () => {
      this.resize()
    })
    //初次渲染超过父元素宽度，父级元素还没有layout的时候，图表就开始生成，这时候他的宽度就不受默认layout的限制，
    //而是会找到一个已经layout的最大的父级元素作为父级。等到真正的父级layout完毕，就超出了父级容器。
    //加一个短暂延时
    setTimeout(() => {
      this.resize()
    }, 1)
  }
  render() {
    const { width, height } = this.props
    return (
      <div
        style={{
          height,
          width,
        }}
        ref={this.chartDom}
      ></div>
    )
  }
}
