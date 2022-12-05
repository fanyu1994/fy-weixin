<template>
  <view class="content">
    <uni-section title="Echarts" type="line">
      <uni-card title="环形" extra="渐变色">
        <div>
          <e-charts-huan>
            <template #title>
              <uni-badge :text="huan_title"></uni-badge>
            </template>
          </e-charts-huan>
        </div>
      </uni-card>
      <uni-card title="关系图" extra="12">
        <div>
          <e-charts-graph>
            <template #title>
              <uni-badge :text="graph_title"></uni-badge>
            </template>
          </e-charts-graph>
        </div>
      </uni-card>
      <uni-card title="仪表盘" extra="22">
        <div>
          <e-charts-gauge>
            <template #title>
              <uni-badge :text="gauge_title"></uni-badge>
            </template>
          </e-charts-gauge>
        </div>
      </uni-card>
    </uni-section>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import EChartsHuan from 'comp/ehcarts/huan.vue'
import EChartsGraph from 'comp/ehcarts/graph.vue'
import EChartsGauge from 'comp/ehcarts/gauge.vue'
const huan_title = ref('测试-9')
const graph_title = ref('1-9')
const gauge_title = ref('仪表仪')
</script>

<style lang="scss">
.content {
  width: 100%;
  box-sizing: border-box;
}
</style>
