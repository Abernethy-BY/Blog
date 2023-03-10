/*
 * @Author: Abernethy-BY by15242952083@outlook.com
 * @Date: 2023-02-10 17:11:08
 * @LastEditors: Abernethy-BY by15242952083@outlook.com
 * @LastEditTime: 2023-02-22 14:04:30
 * @FilePath: \Blog\nuxt.config.ts
 * @Description:
 * Copyright (c) 2023 by Abernethy-BY email: by15242952083@outlook.com, All Rights Reserved.
 */
export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@element-plus/nuxt',
    'nuxt-headlessui',
    '@nuxt/image-edge',
  ],
  experimental: {
    reactivityTransform: true,
    inlineSSRStyles: false,
  },
  css: [
    'normalize.css/normalize.css',
    '@/style/scss/main.scss',
    '@/style/css/main.css',
  ],
  // scripts: [],
  colorMode: {
    classSuffix: '',
  },
  hooks: {

  },
  headlessui: {
    prefix: 'Headless',
  },
  // components({
  //   // resolvers: [AntDesignVueResolver(), ElementPlusResolver(), VantResolver()],
  // }),
})
