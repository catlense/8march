import express from 'express'
import cors from 'cors'

import config from './config.js'

const app = express()
app.use(cors())

app.get('/', (req, res) => {
  res.status(200).json('ok')
})

app.listen(config.PORT, () => console.log(`Server has been started on ${config.PORT}`))