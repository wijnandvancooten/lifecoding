//require the main express library
const express = require('express'),
      fs = require('fs')
//generate a router object from the express library
//A router is sort of a empty empty 'app' that only has route logic
const router = express.Router()

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
