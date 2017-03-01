const fs = require ('fs')

var users;
fs.readFile(__dirname +   '/users.json', function(err, data){
  if (err) return console.error(err);
  likeStore = JSON.parse(data);
});
//console.log(users)

export.module = users
