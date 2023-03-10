export default defineNuxtRouteMiddleware((to, from) => {
  if ((!useUserStore().token || useUserStore().token === '') && (to.path !== '/login'))
    return navigateTo('/login')
})
