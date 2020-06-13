const md5 = require('md5')
const teaModel = require('../../model/tea')

const salt = 'md5Salt' // MD5加盐

// 用户注册
function teacrea(req) {
    return new Promise((resolve, reject) => {
        UsersModel.findOne({where : {userAccount: req.body.userAccount}}).then(result => {
            if (result) {
                resolve({code: 2, message: '该用户名已被注册'})
            } else {
                const params = {
                    userAccount: req.body.userAccount,
                    password: md5(req.body.password+salt),
                    createTime: new Date().getTime()
                }
                UsersModel.create(params).then(suc => {
                    if (suc) {
                        resolve({code: 1, message: '注册成功'})
                    } else {
                        resolve({code: 3, message: '注册失败，请重试'})
                    }
                })
            }
        })
    })
}
function alltea(req) {
    return new Promise((resolve, reject) => {
        UsersModel.findOne({where : {userAccount: req.body.userAccount}}).then(result => {
            if (result) {
                resolve({code: 2, message: '该用户名已被注册'})
            } else {
                const params = {
                    userAccount: req.body.userAccount,
                    password: md5(req.body.password+salt),
                    createTime: new Date().getTime()
                }
                UsersModel.create(params).then(suc => {
                    if (suc) {
                        resolve({code: 1, message: '注册成功'})
                    } else {
                        resolve({code: 3, message: '注册失败，请重试'})
                    }
                })
            }
        })
    })
}


module.exports = {
    userRegister,
    userLogin
}