import express from 'express'
import 'dotenv/config'

import { logger } from '@core/logger'

require('module-alias/register')

const server = express()
const port = 3000

server.listen(port, async () => {
  logger.info(`Server started ${port}`)
})
