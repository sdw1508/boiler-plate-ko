const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://dongwonsun:sdw1508!@@boilerplate.ukb6t.mongodb.net/<dbname>?retryWrites=true&=majority',{
  useNewUrlParser: true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false
}).then(()=> console.log('MongoDB Connected'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World! 성동원')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})