/**
 * 路由逻辑处理文件
 */
const express = require('express')
const userAction = require('./action/user')
const teaAction = require('./action/teaac')
const router = express.Router()


// 用户注册
router.post('/user/register', (req, res) => {
	userAction.userRegister(req).then(result => {
		res.send(result)
	})
})	

// 用户登录
router.post('/user/login', (req, res) => {
	userAction.userLogin(req).then(result => {
		res.send(result)
	})
})

// 对于没有的匹配的页面进行处理，相对于404
router.use((req, res) => {
	res.send("404")
})

module.exports = router
