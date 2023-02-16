const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userdataSchema = new Schema({
  author: ObjectId,
  name : { type : String , required : true },
  email : {type : String , required : true},
  password : {type : String}

});
 
const userdatamodel = mongoose.model('userdata',userdataSchema);

module.exports = userdatamodel ;
