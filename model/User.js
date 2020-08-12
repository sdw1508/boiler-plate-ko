const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name : {
        type : String,
        maxlength:50    
    },
    email:{
        type:String,
        trim:true,
        unique:1
    },
    password:{
        type:String,
        minlength:50
    },
    role:{
        type:Number,
        default:0
    },
    image:String,
    token:{
        type:String        
    },
    tokenExp:{
        type:Number
    }

})
//스키마를 모델로 감싼다
const User = mongoose.model('User',userSchema)
//다른파일에서도 이 모델을 사용할 수 있도록
module.exports = {User}