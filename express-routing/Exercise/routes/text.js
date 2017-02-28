//require the main express library
const express = require('express')
//generate a router object from the express library
//A router is sort of a empty empty 'app' that only has route logic
const router = express.Router()

// a new rout that says 'yey'
router.get('/text1', (req, res) => {
  res.send('Yey new user')
})

// a new rout that says 'yey'
router.get('/text2', (req, res) => {
  res.send('No user delete')
})

module.exports = router
