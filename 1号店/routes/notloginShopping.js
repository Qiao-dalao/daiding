const goods = require('../model/goods.js')
const users = require('../model/users')
function notloginShopping(req,res){
    goods.find({type:'猜你喜欢'}).then(async (result)=>{
        var str = req.cookies
        var name = await users.find({'_id':str._id})
        if(name.length==0){
            res.render('notloginShopping',{
                id:req.params.type,
                results,
                name:[{name:'注册 登录'}]
            }) 
        }else{
            res.render('notloginShopping',{
                id:req.params.type,
                results,
                name
            }) 
        }
			
		
		
    });     
}
module.exports = notloginShopping