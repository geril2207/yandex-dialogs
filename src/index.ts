import express from 'express'
import * as dotenv from 'dotenv'
import bodyParser from 'body-parser'
dotenv.config()

const port = process.env.PORT || 8080
const app = express()
app.use(bodyParser.json())

app.post('/', (req, res) => {
  const { version, session, request } = req.body

  console.log('request :>> ', request.command)
  res.json({
    version,
    session,
    response: {
      text: request?.command ?? 'Привет, я Алиса, а ты?',
      end_session: false,
    },
  })
})

app.listen(port, () => {
  console.log(`SERVER STARTED AT PORT ${port}`)
})
