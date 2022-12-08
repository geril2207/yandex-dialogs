import express from 'express'
import * as dotenv from 'dotenv'
dotenv.config()

const port = process.env.port || 5000
const app = express()

app.post('/', (req, res) => {
  console.log('req :>> ', req)
  res.json('Привет я Тестовая Алиса')
})

app.listen(port, () => {
  console.log(`SERVER STARTED AT PORT ${port}`)
})
