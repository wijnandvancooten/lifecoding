//require tje main express library
const express = require('express')
//create our app from the library
const app = express()


//import router from directory /routes/user
//const user = require(__dirname + '/routes/user')

app.use(express.static('public'))


//make the app listen to localhost:300
app.listen (3000, f => {
  console.log('server is running on port 3000')
})
