//require tje main express library
const express = require('express')
//create our app from the library
const app = express()

//require the text.js file and set it to a cons named text
const text = require(__dirname + '/routes/text')

//uses the poblic file to display the html file that is inside.
app.use(express.static('public'))

//uses the path /patato and de module text.
app.use('/potato', text)

app.get('/', (req, res) => {
  console.log('someone is visiting us on the dead cat page ;)')
})

//make the app listen to localhost:300
app.listen (3000, f => {
  console.log('server is running on port 3000')
})
