
-- 设置客户端语言UTF8
SET NAMES UTF8;
-- 删除数据库xuezi如果存在
DROP DATABASE IF EXISTS `zw_wedding`;
-- 创建数据库xuezi
CREATE DATABASE `zw_wedding` CHARSET=UTF8;
-- 进入数据库
USE `zw_wedding`;

-- -----------------------------------
-- 创建首页轮播图表格 zw_index_carousel
-- -----------------------------------

DROP TABLE IF EXISTS `zw_index_carousel`;
CREATE TABLE `zw_index_carousel` (
    `lb_id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,    #轮播图编号
    `lb_pic` VARCHAR(128) DEFAULT NULL,                 #轮播图路径
    `lb_href` VARCHAR(128) DEFAULT NULL                 #轮播图片链接
);

-- ----------------------------------------
-- 插入数据到首页轮播图表格 zw_index_carousel
-- ----------------------------------------

INSERT INTO `zw_index_carousel` VALUES (NULL,'img/index/banner1.jpg','product_details.html?cid=后期添加');
INSERT INTO `zw_index_carousel` VALUES (NULL,'img/index/banner2.jpg','product_details.html?cid=后期添加');
INSERT INTO `zw_index_carousel` VALUES (NULL,'img/index/banner3.jpg','product_details.html?cid=后期添加');
INSERT INTO `zw_index_carousel` VALUES (NULL,'img/index/banner4.jpg','product_details.html?cid=后期添加');

-- -------------------------------
-- 创建首页案例产品表 zw_index_case
-- -------------------------------

DROP TABLE IF EXISTS `zw_index_case`;
CREATE TABLE `zw_index_case` (
    `cid` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,      #案例编号
    `style` VARCHAR(5) DEFAULT NULL,                    #案例风格
    `site` INT DEFAULT NULL,                            #案例场地 室内1 室外0
    `case_pic` VARCHAR(128) DEFAULT NULL,               #图片路径
    `case_href` VARCHAR(128) DEFAULT NULL               #图片链接
);

-- ------------------------------------
-- 插入数据到首页案例产品表 zw_index_case
-- ------------------------------------

INSERT INTO `zw_index_case` VALUES (NULL,'复古',1,'img/index/case1.jpg','product_details.html?cid=');
INSERT INTO `zw_index_case` VALUES (NULL,'中国风',1,'img/index/case2.jpg','product_details.html?cid=');
INSERT INTO `zw_index_case` VALUES (NULL,'唯美',1,'img/index/case3.jpg','product_details.html?cid=');
INSERT INTO `zw_index_case` VALUES (NULL,'森系',1,'img/index/case4.jpg','product_details.html?cid=');
INSERT INTO `zw_index_case` VALUES (NULL,'梦幻',1,'img/index/case5.jpg','product_details.html?cid=');
INSERT INTO `zw_index_case` VALUES (NULL,'小清新',0,'img/index/case6.jpg','product_details.html?cid=');
INSERT INTO `zw_index_case` VALUES (NULL,'唯美',0,'img/index/case7.jpg','product_details.html?cid=');
INSERT INTO `zw_index_case` VALUES (NULL,'复古',0,'img/index/case8.jpg','product_details.html?cid=');
INSERT INTO `zw_index_case` VALUES (NULL,'森系',0,'img/index/case9.jpg','product_details.html?cid=');
INSERT INTO `zw_index_case` VALUES (NULL,'梦幻',0,'img/index/case10.jpg','product_details.html?cid=');

-- ---------------------------------------------
-- 创建首页酒店表 zw_index_hotel
-- ---------------------------------------------

DROP TABLE IF EXISTS `zw_index_hotel`;
CREATE TABLE `zw_index_hotel` (
    `hid` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,      #酒店编号
    `hname` VARCHAR(10) DEFAULT NULL,                   #酒店名称
    `district` VARCHAR(6) DEFAULT NULL,                 #酒店所在区
    `hotel_pic` VARCHAR(128) DEFAULT NULL,              #图片路径
    `hotel_href` VARCHAR(128) DEFAULT NULL              #图片链接
);

-- ---------------------------------------------
-- 插入数据到首页酒店表 zw_index_hotel
-- ---------------------------------------------

INSERT INTO `zw_index_hotel` VALUES (NULL,'皇冠假日酒店','锦江区','img/index/hotel1.jpg','product_details.html?cid=');
INSERT INTO `zw_index_hotel` VALUES (NULL,'凯宾斯基饭店','武侯区','img/index/hotel2.jpg','product_details.html?cid=');
INSERT INTO `zw_index_hotel` VALUES (NULL,'希尔顿酒店','青羊区','img/index/hotel3.jpg','product_details.html?cid=');
INSERT INTO `zw_index_hotel` VALUES (NULL,'望江宾馆','成华区','img/index/hotel4.jpg','product_details.html?cid=');

-- ---------
-- 创建用户表
-- ---------

DROP TABLE IF EXISTS `zw_user`;
CREATE TABLE `zw_user` (
    `uid` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,      #用户编号
    `uname` VARCHAR(32) DEFAULT NULL,                   #用户昵称
    `full_name` VARCHAR(32) DEFAULT NULL,               #用户真实姓名
    `upwd` VARCHAR(16) DEFAULT NULL,                    #用户密码
    `phone` char(11) DEFAULT NULL,                      #用户手机号
    `email` VARCHAR(32) DEFAULT NULL,                   #用户邮箱
    `sex` INT DEFAULT NULL,                             #性别 男1 女0
    `u_avater` VARCHAR(128) DEFAULT NULL                #用户头像路径
);

-- ---------------
-- 插入数据到用户表
-- ---------------

INSERT INTO `zw_user` VALUES(NULL,'jianli','高渐离','gjl_123456','13584025123','jianli@163.com',1,'img/avater/user/101.jpg');
INSERT INTO `zw_user` VALUES(NULL,'shaoyou','秦少游','qsy_123456','13770857623','qin@126.com',1,'img/avater/user/102.jpg');
INSERT INTO `zw_user` VALUES(NULL,'xliang','萧良','xl_123456','13675110083','xiao@139.com',1,'img/avater/user/103.jpg');
INSERT INTO `zw_user` VALUES(NULL,'Hao','张昊','zh_123456','15105182245','716653824@qq.com',1,'img/avater/user/104.jpg');
INSERT INTO `zw_user` VALUES(NULL,'liuxu','刘旭','lx_123456','18951812066','224355678@qq.com',1,'img/avater/user/105.jpg');
INSERT INTO `zw_user` VALUES(NULL,'刺秦','靳柯','jk_123456','13584025123','keke@163.com',1,'img/avater/user/106.jpg');
INSERT INTO `zw_user` VALUES(NULL,'君临天下','王临','wl_123456','15265058838','wlin@126.com',1,'img/avater/user/107.jpg');
INSERT INTO `zw_user` VALUES(NULL,'Yfeng','沈毅峰','syf_123456','13256633672','syf@163.com',1,'img/avater/user/108.jpg');
INSERT INTO `zw_user` VALUES(NULL,'谦谦君子','马玮谦','mqw_123456','13882253862','267453169@qq.com',1,'img/avater/user/109.jpg');
INSERT INTO `zw_user` VALUES(NULL,'Boat','林一舟','gjl_123456','18765020968','boat@139.com',1,'img/avater/user/110.jpg');
INSERT INTO `zw_user` VALUES(NULL,'Fish','鱼幼薇','yyw_123456','13584025123','vivi@163.com',0,'img/avater/user/001.jpg');
INSERT INTO `zw_user` VALUES(NULL,'caicai','蔡文姬','cc_123456','13854016888','caicai@163.com',0,'img/avater/user/002.jpg');
INSERT INTO `zw_user` VALUES(NULL,'QWY','秦舞阳','qwy_123456','13266335880','554378231@qq.com',0,'img/avater/user/003.jpg');
INSERT INTO `zw_user` VALUES(NULL,'春夏冬','陈沐秋','qiu_123456','15908138303','mumu@139.com',0,'img/avater/user/004.jpg');
INSERT INTO `zw_user` VALUES(NULL,'Moon','白月初','byc_123456','13869774769','white@139.com',0,'img/avater/user/005.jpg');
INSERT INTO `zw_user` VALUES(NULL,'婷婷','展雨婷','zyt_123456','15052678309','664321588@qq.com',0,'img/avater/user/006.jpg');
INSERT INTO `zw_user` VALUES(NULL,'一诺千金','许诺','xn_123456','18108234567','xunuo@126.com',0,'img/avater/user/007.jpg');
INSERT INTO `zw_user` VALUES(NULL,'Su','苏妍','sy_123456','15198862217','yan@126.com',0,'img/avater/user/008.jpg');
INSERT INTO `zw_user` VALUES(NULL,'非雾','师半烟','by_123456','13770019096','shishi@126.com',0,'img/avater/user/009.jpg');
INSERT INTO `zw_user` VALUES(NULL,'冉冉','慕冉','mr_123456','18995101809','718833652@qq.com',0,'img/avater/user/010.jpg');

-- -----------
-- 创建策划师表
-- -----------
