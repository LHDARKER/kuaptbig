// var mongoose = require('mongoose');
// var nodemailer = require('nodemailer');
// mongoose.Promise = global.Promise
//
// module.exports = function() {
//     var db = mongoose.connect('mongodb://localhost:27017/mongoose-test' , {}, function (err, res) {
//         if (err) {
//             console.log('Connection refused to mongodb://localhost:27017/mongoose-test');
//             console.log(err);
//         } else {
//             console.log('Connection successful to mongodb://localhost:27017/mongoose-test');
//         }
//     });
//     //require('../models/users.js');
//     return db;
// }
var mongoose = require('mongoose');
var nodemailer = require('nodemailer');

var Mongoose = {
    url: 'mongodb://localhost:27017/2048',
    connect() {
        mongoose.connect(this.url, {
            useNewUrlParser: true
        }, (err) => {
            if(err) {
                console.log('数据库连接失败');
                return;
            }
            console.log('数据库连接成功');
        });
    }
};

var Email = {
    config: {
        host: "smtp.qq.com",
        port: 587,
        auth: {
            user: '1027911762@qq.com',
            pass: 'linhaoderizi0816'
        }
    },
    get transporter (){
        return nodemailer.createTransport(this.config);
    },
    get verify(){
        return Math.random().toString().substring(2,6);
    },
    get time(){
        return Date.now();
    }

};

var Head = {
    baseUrl : 'http://localhost:3000/uploads/'
}


module.exports = {
    Mongoose,
    Email,
    Head
};