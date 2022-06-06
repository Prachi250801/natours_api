const mongoose = require('mongoose');

const userSchema= new mongoose.Schema({
  name:{
    type:String,
    required:[true,'A tour must have a name'],
    unique:true
  },
  date:{
    type:String
  },
  platform:{
    type:String
  },
  url:{
    type:String
  }
});
const User=mongoose.model('User',userSchema);

module.exports=User;
