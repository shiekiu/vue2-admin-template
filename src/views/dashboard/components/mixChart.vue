<template>
  <div :class="className" :id="id" :style="{height:height,width:width}"></div>
</template>
<script>
import echarts from 'echarts'
export default {
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    id: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '200px'
    },
    height: {
      type: String,
      default: '200px'
    }
  },
  data () {
    return {
      chart: null
    }
  },
  mounted () {
    this.initChart()
    this.chart = null
  },
  beforeDestroy () {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart () {
      this.chart = echarts.init(document.getElementById(this.id))
      const xData = (function () {
        const data = []
        data.push('员工A')
        data.push('员工B')
        data.push('员工C')
        data.push('员工D')
        data.push('员工E')
        data.push('员工F')
        data.push('员工G')
        data.push('员工H')
        data.push('员工I')
        data.push('员工J')
        data.push('员工K')
        data.push('员工L')
        // for (let i = 1; i < 13; i++) {
        //   data.push(i + '月份')
        // }
        return data
      }())
      this.chart.setOption({
        backgroundColor: '#344b58',
        title: { text: '一月', subtext: '统计', x: '4%', textStyle: { color: '#fff', fontSize: '22' }, subtextStyle: { color: '#90979c', fontSize: '16' } },
        tooltip: { trigger: 'axis', axisPointer: { textStyle: { color: '#fff' } } },
        grid: { borderWidth: 0, top: 110, bottom: 95, textStyle: { color: '#fff' } },
        legend: { x: '15%', top: '10%', textStyle: { color: '#90979c' }, data: ['A', 'C', '平均'] },
        calculable: true,
        xAxis: [{
          type: 'category',
          axisLine: { lineStyle: { color: '#90979c' } },
          splitLine: { show: false },
          axisTick: { show: false },
          splitArea: { show: false },
          axisLabel: { interval: 0 },
          data: xData
        }],
        yAxis: [{
          type: 'value',
          axisLine: { lineStyle: { color: '#90979c' } },
          splitLine: { show: false },
          axisTick: { show: false },
          splitArea: { show: false },
          axisLabel: { interval: 0 }
        }],
        dataZoom: [{
          show: true,
          height: 30,
          xAxisIndex: [ 0 ],
          bottom: 30,
          start: 10,
          end: 80,
          handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
          handleSize: '110%',
          handleStyle: { color: '#d3dee5' },
          textStyle: { color: '#fff' },
          borderColor: '#90979c'
        },
        {
          type: 'inside',
          show: true,
          height: 15,
          start: 1,
          end: 35
        }],
        series: [{
          name: 'A',
          type: 'bar',
          stack: '总量',
          barMaxWidth: 35,
          barGap: '10%',
          itemStyle: { normal: { color: 'rgba(255,144,128,1)', label: { show: true, textStyle: { color: '#fff' }, position: 'insideTop', formatter (p) { return p.value > 0 ? p.value : '' } } } },
          data: [ 11, 21, 31, 41, 51, 61, 71, 81, 91, 101, 111, 121 ]
        },
        {
          name: 'C',
          type: 'bar',
          stack: '总量',
          itemStyle: { normal: { color: 'rgba(0,191,183,1)', label: { show: true, position: 'top', formatter (p) { return p.value > 0 ? p.value : '' } }, barBorderRadius: 0 } },
          data: [ 12, 22, 32, 42, 52, 62, 72, 82, 92, 102, 112, 122 ]
        },
        {
          name: '平均',
          type: 'line',
          stack: '总量',
          symbolSize: 10,
          symbol: 'circle',
          itemStyle: { normal: { color: 'rgba(252,230,48,1)', label: { show: true, position: 'top', formatter (p) { return p.value > 0 ? p.value : '' } }, barBorderRadius: 0 } },
          data: [ 11.5, 21.5, 31.5, 41.5, 51.5, 61.5, 71.5, 81.5, 91.5, 101.5, 111.5, 121.5 ]
        }
        ]
      })
    }
  }
}
</script>
