import echarts from '@/lib/echarts'
import { useCallback, useEffect, useMemo } from 'react'
export default function useEcharts(updater = {}, dom, config) {
  let chart = null //echart实例对象
  const renderChart = useCallback(() => {
    // console.log('useMemo')
    console.log(dom)
  }, [updater])
  useEffect(() => {
    chart = echarts.init(dom.current)

    return () => {
      chart && chart.dispose()
    }
  }, [])
  useEffect(() => {
    renderChart()
  }, [renderChart])
}
