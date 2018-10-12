const mongoose = require('mongoose')

const connectionString = 'mongodb://localhost/fruits'

mongoose.connect(connectionString)

mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${connectionString}`)

})

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose is disconnected')
})

mongoose.connection.on('error', (err) => {
  console.log('Mongoose errer:', err);
})