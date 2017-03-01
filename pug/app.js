const express = require('express'),
      bodyParser = require('body-parser')

const app = express()

//app.set('views', '/views')
app.set('view engine', 'pug')
app.use('/static', express.static(__dirname + '/static'))
app.use (bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
    let products = [{
            name: 'oranges',
            price: 100
        },
        {
            name: 'apples',
            price: 80
        },
        {
            name: 'bananas',
            price: 50
        },
        {
            name: 'bappels',
            price: 150
        },
        {
            name: 'ukulele',
            price: 200
        }
    ]
    res.render('index', {
        user: 'Wijnand',
        today: 'Wensday',
        products: products
    })
})

app.post('/api', (req, res)=>{
  res.send('well done ' + req.body.name +' you handsome fuck')
  console.log(req)
})

app.get('/api', (req, res) =>{
  console.log(req.query)
  res.send('this was a get request, merci :)')
})

app.listen(3000, f => {
    console.log('server is running on port 3000')
})
