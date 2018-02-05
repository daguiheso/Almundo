'use strict'

const debug = require('debug')('almundo:api:routes')
const express = require('express')
var _ = require('underscore')

const api = express.Router()

const data = require('./data.json')

// Route GET /hotels
api.get('/hotels', (req, res, next) => {

  const query = req.query
  // If there is a query
  if (query !== {}) {
    if (query.name) {
      let re = new RegExp(query.name, 'i')
      let predicated = []
      data.map(obj => {
        obj.name.match(re) ? predicated.push(obj) : null
      })
      return res.status(200).send(predicated)
    }
    if (query.stars) {
      let filtered = _.where(data, { stars: parseInt(query.stars) })
      return res.status(200).send(filtered)
    }
  }
  // If there is no query
  res.status(200).send(data)

})

module.exports = api
