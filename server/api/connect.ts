/*
 * @Author: Abernethy-BY by15242952083@outlook.com
 * @Date: 2023-02-15 21:55:59
 * @LastEditors: Abernethy-BY by15242952083@outlook.com
 * @LastEditTime: 2023-02-16 16:14:39
 * @FilePath: \Blog\server\api\connect.ts
 * @Description:
 * Copyright (c) 2023 by Abernethy-BY email: by15242952083@outlook.com, All Rights Reserved.
 */
import { MongoClient } from 'mongodb'
import consola from 'consola'
const uri = 'mongodb://116.204.122.216:27017?retryWrites=true&w=majority'
const client = new MongoClient(uri)
// export default defineEventHandler(() => {
//   return MongoClient.connect(url, (err, db) => {
//     if (err)
//       throw err
//     consola.info('数据库已创建!')
//     db.close()
//   })
// })

// const uri = 'mongodb://116.204.122.216:27017/VFdesk'

async function run() {
  try {
    const database = client.db('VFdesk')
    const VFdeskDb = database.collection('VFdesk')
    // Query for a movie that has the title 'Back to the Future'
    const query = { name: 'UU' }
    const movie = await VFdeskDb.findOne(query)
    // consola.log(movie)
    return VFdeskDb
  }
  catch (error) {
    consola.fatal(error)
  }
  finally {
    // Ensures that the client will close when you finish/error
    await client.close()
  }
}
// export default ()=>'111'

// run().catch(console.dir);
export default defineEventHandler(() => run())
