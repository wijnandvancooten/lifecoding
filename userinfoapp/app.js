const express = require('express'),
      bodyParser = require('body-parser')

const app = express()

//routers///
//require the text.js file and set it to a cons named text
const users = require(__dirname + '/users')
//console.log(users[1].firstname)

app.set('views', __dirname + '/views')
app.set('view engine', 'pug')

app.use('/static', express.static(__dirname + '/static'))

app.use(bodyParser.json())

app.use (bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) =>{
  res.render('index', {
    users: users
  })
})




app.listen(3000, f =>{
  console.log('server is running on port 3000')
})
