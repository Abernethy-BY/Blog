/*
 * @Author: Abernethy-BY by15242952083@outlook.com
 * @Date: 2023-02-10 17:11:08
 * @LastEditors: Abernethy-BY by15242952083@outlook.com
 * @LastEditTime: 2023-02-16 11:43:20
 * @FilePath: \Blog\server\api\pageview.ts
 * @Description:
 * Copyright (c) 2023 by Abernethy-BY email: by15242952083@outlook.com, All Rights Reserved.
 */
const startAt = Date.now()
let count = 0

export default defineEventHandler((): { pageview: number; startAt: number } => ({ pageview: count++, startAt }))
