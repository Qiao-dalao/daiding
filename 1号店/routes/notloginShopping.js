const goods = require('../model/goods.js')
const users = require('../model/users')
function notloginShopping(req,res){
    goods.find({type:'猜你喜欢'}).then(async (result)=>{
        var str = req.cookies
        var name = await users.find({'_id':str._id})
			res.render('notloginShopping',{
			    results:result,
				name:name
			})
		
		
    });     
}
module.exports = notloginShopping