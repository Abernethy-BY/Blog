<!--
 * @Author: BY by15242952083@outlook.com
 * @Date: 2023-02-12 18:19:39
 * @LastEditors: Abernethy-BY by15242952083@outlook.com
 * @LastEditTime: 2023-03-10 19:44:11
 * @FilePath: \Blog\layouts\login.vue
 * @Description:
 * Copyright (c) 2023 by ${git_name} email: ${git_email}, All Rights Reserved.
-->
<script lang="ts" setup>
// import bg from '/image/UFO.jpg'
</script>

<template>
  <div class="login-box bg-[url(/image/UFO.jpg)]" fr-c ca-c h-full w-full po-r>
    <slot />
    <!-- <el-image class="login-background" :src="bg" fit="cover" /> -->
    <!-- <nuxt-img src="/image/UFO.jpg" sizes="sm:100vw md:50vw lg:400px" /> -->
  </div>
</template>

<style lang="scss" scoped>
.login-box{
  // background: ;

  :deep(.login-background){
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
}
</style>
