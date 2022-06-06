const mongoose = require('mongoose');

const toursSchema= new mongoose.Schema({
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
const Tour=mongoose.model('Tour',toursSchema);

module.exports=Tour;
