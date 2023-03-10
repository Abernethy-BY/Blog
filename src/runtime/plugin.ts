import { defineNuxtPlugin } from '#app'
import consola from "consola";
export default defineNuxtPlugin((nuxtApp) => {
  console.log('Plugin injected by my-module!')
})
