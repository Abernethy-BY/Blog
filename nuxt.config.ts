/*
 * @Author: Abernethy-BY by15242952083@outlook.com
 * @Date: 2023-02-10 17:11:08
 * @LastEditors: Abernethy-BY by15242952083@outlook.com
 * @LastEditTime: 2023-03-10 19:24:33
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
    '@nuxt/image-edge',
    '@pinia-plugin-persistedstate/nuxt',
  ],
  experimental: {
    reactivityTransform: true,
    inlineSSRStyles: false,
  },
  piniaPersistedstate: {
    cookieOptions: { sameSite: 'strict' },
    storage: 'sessionStorage',
  },
  css: [
    'normalize.css/normalize.css',
    '@/style/scss/main.scss',
    '@/style/css/main.css',
  ],

  colorMode: { classSuffix: '' },
  hooks: { },
  // headlessui: { prefix: 'Headless' },
})
