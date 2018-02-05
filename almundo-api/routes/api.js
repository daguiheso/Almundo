'use strict'

const debug = require('debug')('almundo:api:routes')
const express = require('express')
var _ = require('underscore')

const api = express.Router()

const data = require('../data.json')

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
      let countStars = query.stars.split(" ")
      let filtered = [];
      for (let i = 0; i < countStars.length; i++) {
        let tempData = []
        tempData = _.where(data, { stars: parseInt(countStars[i]) })
        for (let j = 0; j < tempData.length; j++) {
          filtered.push(tempData[j])
        }
      }
      return res.status(200).send(filtered)
    }
  }
  // If there is no query
  res.status(200).send(data)
})

module.exports = api
