const express = require('express'); //from documentation: express is function
const app = express();//app is an object
// const Fruit = require('./models/fruits')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

require('./db/db')
//require controller here * post making controller
const fruitsController = require('./controllers/fruits')

//setting up middleware
// middleware are functions that happen
//synchronously in the request from the client
//on the server

app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

app.use('/fruits', fruitsController)

// app.get('/', (request, response) => {
//   response.send('This is some parrrrrtayyy talk')
// })
//
//
// //model
//
// // const Fruits = ['apple', 'banana', 'pear']
//
// //index action
// // app.get('/fruits', (req, res) => {
// //   res.send(Fruit)
// // })
//
// app.get('/fruits', (req, res) => {
//   res.render('index.ejs', {fruits: Fruit});
// });
//
//
// app.get('/fruits/new', (req, res) => {
//   res.render('new.ejs')
// })
//
// app.get('/fruits/:index/edit/', (req, res) => {
//   res.render('edit.ejs', {
//     fruit: Fruit[req.params.index],
//     index: req.params.index
//   })
// })
//
//
// app.post('/fruits', (req, res) => {
//   console.log(req.body, ' this is where our infor from the fruit form will live');
//   if(req.body.readyToEat === 'on') {
//     req.body.readyToEat = true
//   } else {
//     req.body.readyToEat = false
//   }
//   Fruit.push(req.body)
//   res.redirect('/fruits')
// })
//
//
//
// app.get('/fruits/:index', (req, res) => {
//   console.log(req.params);
//   // res.send(fruits[req.params.index])
//   res.render('show.ejs', {
//     fruit: Fruit[req.params.index]
//   })
// })
//
// app.delete('/fruits/:index', (req, res) => {
//   console.log(req.params.index, ' id in delete route');
//   Fruit.splice(req.params.index, 1)
//   res.redirect('/fruits')
// })
//
// app.put('/fruits/:index', (req, res) => {
//   console.log(req.params.index, ' id in the put route');
//   console.log(req.body, ' this should be our form data');
//   if(req.body.readyToEat === 'on'){
//     req.body.readyToEat = true;
//   } else {
//     req.body.readyToEat = false;
//   }
//   Fruit[req.params.index] = req.body;
//
//   res.redirect('/fruits')
// })

app.listen(3000, ()=>{
    console.log("I am listening");
});
