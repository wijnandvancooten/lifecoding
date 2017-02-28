//require tje main express library
const express = require('express')
//create our app from the library
const app = express()


//import router from directory /routes/user
const user = require(__dirname + '/routes/user')

//mount the route of the 'user' module on the /user path
//in other words , run the sub-app called users under '/users'
app.use('/user', user)

//the main route saaying hello
app.get('/', (req, res) => {
  console.log('someone is visiting us')
  res.send('welkome')
})

//make the app listen to localhost:300
app.listen (3000, f => {
  console.log('server is running on port 3000')
})
