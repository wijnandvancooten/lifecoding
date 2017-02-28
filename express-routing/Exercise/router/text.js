//require the main express library
const express = require('express'),
      fs = require('fs')
//generate a router object from the express library
//A router is sort of a empty empty 'app' that only has route logic
const router = express.Router()

const promise = require(__dirname + '/promises')

// a new rout that loads text3
router.get('/text1', (req, res) => {
    promise( __dirname + '/../public/textfiles/text1.txt' )
    .then(data => {
      res.send(data)
    } ).catch(console.log.bind(console))

})

// a new rout that loads text2
router.get('/text2', (req, res) => {
    promise( __dirname + '/../public/textfiles/text2.txt' ).then(data => {
      res.send(data)
  } ).catch( console.log.bind( console ) )

})
module.exports = router
