import express from 'express'
import * as dotenv from 'dotenv'
import bodyParser from 'body-parser'
dotenv.config()

const port = process.env.PORT || 8080
const app = express()
app.use(bodyParser.json())

app.post('/', (req, res) => {
  console.log('req :>> ', req)
  const { version, session } = req.body
  const responseData: { text: string; version?: any; session?: any } = {
    text: 'Привет я Тестовая Алиса',
  }
  if (version) responseData.version = version
  if (version) responseData.session = session

  res.json(responseData)
})

app.listen(port, () => {
  console.log(`SERVER STARTED AT PORT ${port}`)
})
