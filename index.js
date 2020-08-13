const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser');
const {User} = require("./models/User");
const config = require("./config/key");

//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}));
//application/json 타입을 분석해서 가져올 수 있게 해준 거
app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose.connect(config.mongoURI,{
  useNewUrlParser: true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false
}).then(()=> console.log('MongoDB Connected'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World! 성동원')
})

//register 라우터
//body-parser을 통해서 클라이언트 > 서버 로 넘어오는 데이터를 받을 수 있다. npm install body-parser --save
app.post('/register',(req,res)=> {
  //회원 가입할때 필요한 정보들을 client에서 가져오면 그것들을 데이터베이스에 넣어준다.

  const user = new User(req.body)

  user.save((err,userInfo)=>{
    if(err)return res.json({success:false,err})
    return res.status(200).json({
      success:true
    })
  })  
  
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})