const express = require('express'),
      bodyParser = require('body-parser')

const app = express()

//app.set('views', '/views')
app.set('view engine', 'pug')
app.use('/static', express.static(__dirname + '/static'))
app.use (bodyParser.urlencoded({extended: true}))
