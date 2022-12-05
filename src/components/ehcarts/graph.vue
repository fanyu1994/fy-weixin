<script setup lang="ts">
import { getCurrentInstance, onMounted, reactive, ref } from 'vue'
import * as echarts from 'echarts'
import LEchart from '@/common/lime-echarts/components/l-echart/l-echart.vue'

interface GraphNode {
  symbolSize: number
  label?: {
    show?: boolean
  }
}

const chart = ref<any>(null)
const { proxy } = getCurrentInstance()
const ROOT_PATH = 'https://echarts.apache.org/examples'
const options = reactive({
  title: {
    text: '哈哈哈~~',
    subtext: 'aaaa',
    top: 'bottom',
    left: 'right',
  },
  tooltip: {},
  legend: [
    {
      data: [],
    },
  ],
  animationDurationUpdate: 1500,
  animationEasingUpdate: 'quinticInOut',
  series: [
    {
      name: 'Les Miserables',
      type: 'graph',
      layout: 'circular',
      circular: {
        rotateLabel: true,
      },
      data: [],
      links: [],
      categories: [],
      roam: true,
      label: {
        position: 'right',
        formatter: '{b}',
      },
      lineStyle: {
        color: 'source',
        curveness: 0.3,
      },
    },
  ],
})

const option = {}
function init() {
  proxy
    .fetch(ROOT_PATH + '/data/asset/data/les-miserables.json')
    .then((graph) => {
      console.log(graph, 'fetchres')

      graph.nodes.forEach(function (node: GraphNode) {
        node.label = {
          show: node.symbolSize > 30,
        }
      })
      options.legend[0].data = graph.categories.map(function (a: {
        name: string
      }) {
        return a.name
      })

      options.series[0].data = graph.nodes
      options.series[0].links = graph.links
      options.series[0].categories = graph.categories
      chart.value.init(echarts, (chart) => {
        chart.setOption(options)
      })
    })
}
</script>

<template>
  <view class="ctr">
    <slot name="title"></slot>
    <l-echart ref="chart" @finished="init"></l-echart>
  </view>
</template>

<style lang="scss">
.ctr {
  width: 100%;
  box-sizing: border-box;
  height: 600rpx;
}
</style>
