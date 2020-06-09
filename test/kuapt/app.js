var express = require('express');

var path = require('path');
var favicon = require('serve-favicon');

var logger = require('morgan');

var fs = require('fs');
var FileStreamRotator = require('file-stream-rotator');

var bodyParser = require('body-parser');

var mongoose = require('./config/mongoose');

var db = mongoose();

/********* 引入路由模块 *********/
var routes = [
  {name: 'index', route: require('./routes/index')},
  //{name: 'users', route: require('./routes/users')}
]

var app = express();

/********* 日志设置 *********/
var logDirectory = __dirname + '/logs'
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)
// create a rotating write stream
var accessLogStream = FileStreamRotator.getStream({
  filename: logDirectory + '/access-%DATE%.log',
  frequency: 'daily',
  verbose: false
})
// 生成日志文件
app.use(logger('combined', {stream: accessLogStream}))
// 打印到控制台
app.use(logger('common', {stream: accessLogStream}))

/********* 跨域访问 *********/
app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods','PUT,POST,GET,DELETE,OPTIONS');
  res.header('X-Powered-By',' 3.2.1')
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});

/********* 模版引擎 *********/
app.set('views',path.join(__dirname , 'views') );
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

routes.forEach(function(item) {
  app.use('/'+item.name, item.route)
})

module.exports = app;