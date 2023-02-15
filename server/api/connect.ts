import { MongoClient } from 'mongodb'
const url = 'mongodb://116.204.122.216:27017'
const client = new MongoClient(url)
const dbName = 'VFdest'

const main = async () => {
  // console.log('Connected successfully to server')
  // const db = client.db(dbName)
  // const collection = db.collection('documents')

  await client.connect()
  console.log('Connected successfully to server')
  const db = client.db(dbName)
  const collection = db.collection('VFdest')
  return collection
}

export default defineEventHandler(() => main())
