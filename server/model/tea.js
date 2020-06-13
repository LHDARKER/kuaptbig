/**
 * 教师模型
 */
const Sequelize = require('sequelize')
const config = require('../config')

// 定义用户模型
const UsersModel = config.define('lh_teas', {
    teaid: {
        type: Sequelize.INTEGER,
        primaryKey: true,            // 主键
        autoIncrement: true,         // 自动递增
    },
    teaname: Sequelize.STRING,
    phone: Sequelize.STRING,
    email: Sequelize.STRING,
    createTime: Sequelize.STRING,
}, {
    timestamps: false,
    underscored:false   // 驼峰转下划线
})

module.exports = teaModel