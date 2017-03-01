//require the main express library
const fs = require('fs')

//promise to read the text files//
const readtxt = target => {
  return new Promise((resolve, reject) => {
 		fs.readFile( target, 'utf8', (err, data) => {
 			if (err) return reject(err)
 			// The resolve will send data to the .then() called after the execution of readjson
 			resolve(data)
 		} )
 	} )
 }

 module.exports = readtxt
