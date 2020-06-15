/**
 * 教师模型
 */
const Sequelize = require('sequelize')
const config = require('../config')

// 定义教师模型
const teasModel = config.define('lh_teas', {
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

module.exports = teasModel