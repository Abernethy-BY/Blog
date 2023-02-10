export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@element-plus/nuxt',
    // '@nuxtjs/style-resources',
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
})
