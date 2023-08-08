import express from 'express'
import './src/db/dbConnect.js'


const app = express()
const HOST = 'localhost'
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://${HOST}:${port}`)
})