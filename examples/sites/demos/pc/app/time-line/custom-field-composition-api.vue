<template>
  <tiny-time-line
    :data="data"
    :active="active"
    @click="click"
    name-field="content"
    time-field="timestamp"
    auto-color-field="icon"
    vertical
  ></tiny-time-line>
</template>

<script setup>
import { ref } from 'vue'
import { TimeLine as TinyTimeLine } from '@opentiny/vue'
import { iconLoading } from '@opentiny/vue-icon'

const active = ref(1)
const data = ref([
  {
    content: '提交审批',
    timestamp: '2018-04-15'
  },
  {
    content: '通过审核',
    timestamp: '2018-04-13',
    icon: iconLoading()
  },
  {
    content: '创建成功',
    timestamp: '2018-04-11'
  }
])

function click(index) {
  active.value = index
}
</script>
