/*
Navicat MySQL Data Transfer

Source Server         : test
Source Server Version : 50612
Source Host           : localhost:3306
Source Database       : test2

Target Server Type    : MYSQL
Target Server Version : 50612
File Encoding         : 65001

Date: 2020-06-13 14:27:30
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `lh_teas`
-- ----------------------------
DROP TABLE IF EXISTS `lh_teas`;
CREATE TABLE `lh_teas` (
  `teaid` int(10) NOT NULL AUTO_INCREMENT COMMENT '鏁欏笀id',
  `teaname` varchar(255) NOT NULL COMMENT '鏁欏笀鍚嶅瓧',
  `phone` varchar(20) DEFAULT NULL COMMENT '鏁欏笀鎵嬫満鍙风爜',
  `email` varchar(100) DEFAULT NULL COMMENT '鏁欏笀鐢靛瓙閭',
  `createTime` varchar(13) NOT NULL COMMENT '鐢ㄦ埛鍒涘缓鏁欏笀淇℃伅鐨勬椂闂存埑',
  PRIMARY KEY (`teaid`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of lh_teas
-- ----------------------------
INSERT INTO `lh_teas` VALUES ('1', '张如仟', '13000000000', '1027911762@qq.com', '1567568852082');
INSERT INTO `lh_teas` VALUES ('2', '周笑平', '13000000000', '1027911762@qq.com', '1567568852082');
INSERT INTO `lh_teas` VALUES ('3', '胡兴桥', '13000000000', '1027911762@qq.com', '1567568852082');
INSERT INTO `lh_teas` VALUES ('4', '孙曙迎', '13000000000', '1027911762@qq.com', '1567568852082');
INSERT INTO `lh_teas` VALUES ('5', '王硕苹', '13000000000', '1027911762@qq.com', '1567568852082');
INSERT INTO `lh_teas` VALUES ('6', '郭鸣', '13000000000', '1027911762@qq.com', '1567568852082');

-- ----------------------------
-- Table structure for `lh_users`
-- ----------------------------
DROP TABLE IF EXISTS `lh_users`;
CREATE TABLE `lh_users` (
  `id` int(10) NOT NULL AUTO_INCREMENT COMMENT '鐢ㄦ埛id',
  `userAccount` varchar(255) NOT NULL COMMENT '鐢ㄦ埛璐︽埛',
  `password` varchar(255) NOT NULL COMMENT '鐢ㄦ埛瀵嗙爜',
  `phone` varchar(20) DEFAULT NULL COMMENT '鐢ㄦ埛鎵嬫満鍙风爜',
  `email` varchar(100) DEFAULT NULL COMMENT '鐢ㄦ埛鐢靛瓙閭',
  `createTime` varchar(13) NOT NULL COMMENT '鐢ㄦ埛鍒涘缓璐﹀彿鐨勬椂闂存埑',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of lh_users
-- ----------------------------
INSERT INTO `lh_users` VALUES ('1', 'nihao11', '80499104d7c21bd832cf3638c8f97913', null, null, '1567578067591');
INSERT INTO `lh_users` VALUES ('6', '123456', 'f30d18e0981d2580fdeaffcb79f34135', null, null, '1591850540579');
INSERT INTO `lh_users` VALUES ('7', 'linhao11', '3d67e92ca505e36ebc90d8dc924576e5', null, null, '1591850558539');
INSERT INTO `lh_users` VALUES ('8', 'linhao666', '3d67e92ca505e36ebc90d8dc924576e5', null, null, '1591850682588');
INSERT INTO `lh_users` VALUES ('9', 'linhao', '3d67e92ca505e36ebc90d8dc924576e5', null, null, '1591851139561');
INSERT INTO `lh_users` VALUES ('10', 'ldh', '3d67e92ca505e36ebc90d8dc924576e5', null, null, '1591852796149');
INSERT INTO `lh_users` VALUES ('11', 'lj', '3d67e92ca505e36ebc90d8dc924576e5', null, null, '1591857290826');
INSERT INTO `lh_users` VALUES ('12', 'lhy', '3d67e92ca505e36ebc90d8dc924576e5', null, null, '1592027655374');
