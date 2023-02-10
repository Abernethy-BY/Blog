<!--
 * @Author: Abernethy-BY by15242952083@outlook.com
 * @Date: 2023-02-10 17:11:08
 * @LastEditors: Abernethy-BY by15242952083@outlook.com
 * @LastEditTime: 2023-02-10 18:43:55
 * @FilePath: \Blog\pages\index.vue
 * @Description:
 * Copyright (c) 2023 by Abernethy-BY email: by15242952083@outlook.com, All Rights Reserved.
-->
<script lang="ts" setup>
let data = $ref<number>()
const getData = async () => {
  // data = await useAsyncData('defineEventHandler', () => $fetch('/api/defineEventHandler'))
  const temp = await $fetch('/api/pageview')
  data = temp.pageview
}
// const { data } = await useAsyncData('count', () => $fetch('/api/count'))

definePageMeta({
  layout: 'default',
})
</script>

<template>
  <div w-100px>
    <span>
      {{ data }}
    </span>
    <el-button type="primary" @click="getData">
      Primary
    </el-button>
  </div>
</template>

<style lang="scss" scoped>
div {
  span {
    color: red;
  }
}
</style>
