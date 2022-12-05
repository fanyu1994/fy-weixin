<script setup lang="ts">
import { ref } from 'vue'
import * as echarts from 'echarts'

import LEchart from '@/common/lime-echarts/components/l-echart/l-echart.vue'
const chart = ref<any>(null)

const option = {
  series: [
    {
      type: 'gauge',
      progress: {
        show: true,
        width: 18,

        itemStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: 'red', // 0% 处的颜色
              },
              {
                offset: 1,
                color: 'blue', // 100% 处的颜色
              },
            ],
            global: false, // 缺省为 false
          },
        },
      },
      axisLine: {
        lineStyle: {
          width: 18,
        },
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        length: 15,
        lineStyle: {
          width: 2,
          color: '#999',
        },
      },
      axisLabel: {
        distance: 25,
        color: '#999',
        fontSize: 20,
      },
      anchor: {
        show: true,
        showAbove: true,
        size: 25,
        itemStyle: {
          borderWidth: 10,
        },
      },
      title: {
        show: false,
      },
      detail: {
        valueAnimation: true,
        fontSize: 80,
        offsetCenter: [0, '70%'],
      },
      data: [
        {
          value: 70,
        },
      ],
    },
  ],
}
function init() {
  chart.value.init(echarts, (chart) => {
    chart.setOption(option)
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
