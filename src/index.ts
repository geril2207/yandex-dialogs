import express from 'express'
import * as dotenv from 'dotenv'
import bodyParser from 'body-parser'
dotenv.config()

const port = process.env.PORT || 8080
const app = express()
app.use(bodyParser.json())

app.post('/', (req, res) => {
  console.log('req :>> ', req)
  res.json('Привет я Тестовая Алиса')
})

app.listen(port, () => {
  console.log(`SERVER STARTED AT PORT ${port}`)
})
