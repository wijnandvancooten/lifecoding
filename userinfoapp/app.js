const express = require('express'),
      bodyParser = require('body-parser'),
      fs = require('fs')

const app = express()

//routers///
//require the text.js file and set it to a cons named text
//const users = require(__dirname + '/users')
//console.log(users[1].firstname)

app.set('views', __dirname + '/views')
app.set('view engine', 'pug')

app.use('/static', express.static(__dirname + '/static'))

app.use(bodyParser.json())

app.use (bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) =>{
  fs.readFile(__dirname + '/users.json', 'utf8', (err, data) =>{
    res.render('index', {
      users: JSON.parse(data)
    })
  })
})

// app.get('/search', (req, res) =>{
//   fs.readFile(__dirname + '/users.json', 'utf8', (err, data) =>{
//     var results = [data];
//     var searchField = "data.firstname";
//     var searchVal = "firstname";
//     for (var i=0 ; i < obj.list.length ; i++)
//     {
//         if (obj.data[i][searchField] == searchVal) {
//             results.push(obj.list[i]);
//         }
//     }
//     res.render('search', {
//       users: JSON.parse(data)
//     })
//   })
// })

// var results = [];
// var searchField = "name";
// var searchVal = "my Name";
// for (var i=0 ; i < obj.list.length ; i++)
// {
//     if (obj.list[i][searchField] == searchVal) {
//         results.push(obj.list[i]);
//     }
// }


app.listen(3000, f =>{
  console.log('server is running on port 3000')
})
