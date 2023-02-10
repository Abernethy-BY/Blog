const startAt = Date.now()
let count = 0

export default defineEventHandler((): { pageview: number; startAt: number } => ({ pageview: count++, startAt }))
