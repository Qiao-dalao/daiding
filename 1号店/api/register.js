const users = require('../model/users')

function login(req,res){
	console.log(req.body)
	users.findOne({"username":req.body.username,"password":req.body.password})
		.then((result)=>{
            if(result){
				let data = {"username": req.body.username}
				res.cookie('name',JSON.stringify(data));
                res.json({
                    code:0,
                    msg: '账户已经存在',
					
                })
            }else{
				users.create({"username":req.body.username,"password":req.body.password})
                res.json({
                    code:1,
                    msg: '注册成功'
                })
				
            }
        })
}
module.exports = login