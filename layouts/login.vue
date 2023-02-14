<!--
 * @Author: BY by15242952083@outlook.com
 * @Date: 2023-02-12 18:19:39
 * @LastEditors: BY by15242952083@outlook.com
 * @LastEditTime: 2023-02-12 18:37:56
 * @FilePath: \Blog\layouts\login.vue
 * @Description:
 * Copyright (c) 2023 by ${git_name} email: ${git_email}, All Rights Reserved.
-->
<script lang="ts" setup>
import bg from '/image/UFO.jpg'
</script>

<template>
  <div class="login-box" fr-c ca-c h-100 w-100 po-r>
    <slot />
    <el-image class="login-background" :src="bg" fit="cover" />
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
