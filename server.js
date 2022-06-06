const mongoose = require('mongoose');
//const dotenv = require('dotenv');
//dotenv.config({ path: './config.env' });

const app = require('./app');
const DB ="DATABASEURL";
mongoose.connect(DB,{
  useNewUrlParser:true,
  useCreateIndex:true,
  useFindAndModify:false,
  useUnifiedTopology: true
}).then((con)=>{
  //console.log(con.connections);
  console.log('DB connection successful');

});

// const toursSchema= new mongoose.Schema({
//   name:{
//     type:String,
//     required:[true,'Atour must have a name'],
//     unique:true
//   },
//   rating:Number,
//   price:{
//     type:Number,
//     required:true
//   }
// });
// const Tour=mongoose.model('Tour',toursSchema);
// const testTour = new Tour({
//   name:'The Park Camper',
//   //rating:4.7,
//   price:597
// });

// testTour.save().then(doc=>{
//   console.log(doc);
// }).catch(err=>{
//   console.log('ERR:',err)
// })

//const port = process.env.PORT || 3000;
const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
