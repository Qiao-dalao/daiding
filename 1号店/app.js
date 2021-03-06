var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser')
const db = require('./model/db')
// var AlipaySdk = require('alipay-sdk').default
// var aliService = require('../service/aliPay')
var app = express();


app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json())


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//渲染界面路由
app.get('/items',require('./routes/items'))	//超级单品
app.get('/classes',require('./routes/classes'))	//超级品类
app.get('/brands',require('./routes/brands'))	//超级品牌
app.get('/coupons',require('./routes/coupons'))	//领券中心
app.get('/robgolb',require('./routes/robgolb'))	//抢金币
app.get('/golbsign',require('./routes/golbsign'))	//金币签到



app.get('/recharge',require('./routes/recharge'))//充值
app.get('/myorder/:type',require('./routes/myorder'))//我的订单


app.get('/login',require('./routes/login'))		//登录
app.get('/register',require('./routes/register'))	//注册
app.get('/notloginShopping',require('./routes/notloginShopping'))		//购物车未登录
app.get('/loginShopping/:id',require('./routes/loginShopping'))	//购物车已登录
app.get('/loginShopping',require('./routes/loginShopping'))	//购物车已登录
app.get('/details/:type',require('./routes/details'));	//详情页
app.get('/sureorder',require('./routes/sureorder')) //确认订单页


//功能路由
app.get('/add',require('./api/add'))
app.use('/user/login',require('./api/login'))
app.use('/user/register',require('./api/register'))
app.use('/ceshi',require('./api/ceshi'))
app.post('/numadd',require('./api/numadd'))  //数量增加
app.post('/numjian',require('./api/numadd'))  //数量减少
app.post('/del',require('./api/del'))   //删除购物车内物品
app.post('/sureordercol',require('./api/sureordercol')) //订单页的操作
app.post('/payorder',require('./api/payorder'))



app.use('/', indexRouter);	//主页
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;




