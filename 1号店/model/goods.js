const mongoose = require('mongoose')
var mongooseSchema = new mongoose.Schema({
	type:String,
	img:String,
	miaoshu:String,
	price:Number,
	golb:Number,
	oldprice:Number
});
var mongooseModel = mongoose.model('good', mongooseSchema);
module.exports = mongooseModel


