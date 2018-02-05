'use strict'

const debug = require('debug')('almundo:api')
const http = require('http')
const chalk = require('chalk')
const express = require('express')
var path = require('path')
var cors = require('cors')

const api = require('./routes/api')

const port = process.env.PORT || 3000
const app = express()
const server = http.createServer(app)

app.use(express.static(path.join(__dirname, 'public')))
app.use(cors())
app.use('/api', api)

// Express Error Handler
app.use((err, req, res, next) => {
  debug(`Error: ${err.message}`)

  if (err.message.match(/not found/)) {
    return res.status(404).send({ error: err.message })
  }

  res.status(500).send({ error: err.message})
})

function handleFatalError(err) {
  console.error(`${chalk.red('[fatal error]')} ${err.message}`)
  console.error(err.stack)
  process.exit(1)
}

process.on('uncaughtException', handleFatalError)
process.on('unhandledRejection', handleFatalError)

server.listen(port, () => {
  console.log(`${chalk.blue('[almundo-api]')} server listening on port ${port}`)
})
