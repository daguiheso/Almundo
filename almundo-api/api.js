'use strict'

const debug = require('debug')('almundo:api:routes')
const express = require('express')

const api = express.Router()

api.get('/hotels', (req, res) => {
  debug('A request has come to /hotels')
  const query = req.query
  res.send(query)
})

module.exports = api
