const users = require('../model/users')
async function robgolb(req,res){
	var str = req.cookies
	if(str._id !=0){
		var name = await users.find({'_id':str._id})
		if(name.length==0){
			res.render('robgolb',{
				name:[{name:'注册 登录'}]
			}) 
		}else{
			res.render('robgolb',{
				name
			}) 
		}
	}else{
		res.render('robgolb',{
			name:[{name:'注册 登录'}]
		}) 
	}
	
}
module.exports = robgolb
