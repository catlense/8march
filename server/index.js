import express from 'express'

import config from './config.js'

const app = express()

app.listen(config.PORT, () => console.log(`Server has been started on ${config.PORT}`))