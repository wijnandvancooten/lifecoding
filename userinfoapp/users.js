const fs = require('fs')

fs.readFile(__dirname + '/users.json', 'utf8', (err, data) =>{
        if (err) return console.error(err)
        users = JSON.parse(data)
        //console.log(users)
    })
console.log(users)

module.exports = users
