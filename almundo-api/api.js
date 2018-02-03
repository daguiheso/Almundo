'use strict'

const debug = require('debug')('almundo:api:routes')
const express = require('express')

const api = express.Router()

const data = require('./data.json')

api.get('/hotels', (req, res, next) => {
  debug('A request has come to /hotels')
  const query = req.query

  // if (query.p !== 'yyy') {
  //   return next(new Error('Agent not found'))
  // }
  res.send(data)
})

module.exports = api
