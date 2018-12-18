
-- 设置客户端语言UTF8
SET NAMES UTF8;
-- 删除数据库xuezi如果存在
DROP DATABASE IF EXISTS `v1`;
-- 创建数据库xuezi
CREATE DATABASE `v1` CHARSET=UTF8;
-- 进入数据库
USE `v1`;

-- -----------------------------------
-- 创建首页轮播图表格 v1_index_carousel
-- -----------------------------------

DROP TABLE IF EXISTS `v1_index_carousel`;
CREATE TABLE `v1_index_carousel` (
    `lb_id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,    #轮播图编号
    `cid` INT DEFAULT NULL,                             #案例编号
    `lb_pic` VARCHAR(128) DEFAULT NULL                  #轮播图路径
);

-- ----------------------------------------
-- 插入数据到首页轮播图表格 v1_index_carousel
-- ----------------------------------------

INSERT INTO `v1_index_carousel` VALUES (NULL,1,'img/index/carousel/banner1.jpg');
INSERT INTO `v1_index_carousel` VALUES (NULL,2,'img/index/carousel/banner2.jpg');
INSERT INTO `v1_index_carousel` VALUES (NULL,3,'img/index/carousel/banner3.jpg');
INSERT INTO `v1_index_carousel` VALUES (NULL,4,'img/index/carousel/banner4.jpg');

-- -------------------------------
-- 创建首页案例产品表 v1_index_case
-- -------------------------------

DROP TABLE IF EXISTS `v1_index_case`;
CREATE TABLE `v1_index_case` (
    `index_cid` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,    #首页案例编号
    `cid` INT DEFAULT NULL,                                 #案例编号
    `cname` VARCHAR(32) DEFAULT NULL,                       #案例名称
    `hname` VARCHAR(32) DEFAULT NULL,                       #案例酒店
    `price` DECIMAL(9,2) DEFAULT NULL,                      #案例参考价格
    `case_pic` VARCHAR(128) DEFAULT NULL,                   #图片路径
    `case_href` VARCHAR(128) DEFAULT NULL                   #图片链接
);

-- ------------------------------------
-- 插入数据到首页案例产品表v1_index_case
-- ------------------------------------

INSERT INTO `v1_index_case` VALUES (NULL,1,'小星星小浪漫','红杏酒家','11795.00','img/index/case/case1.jpg','case_details.html?cid=');
INSERT INTO `v1_index_case` VALUES (NULL,2,'果实','圣索亚酒店','14342.00','img/index/case/case2.jpg','case_details.html?cid=');
INSERT INTO `v1_index_case` VALUES (NULL,8,'喜欢你','墨宴','14358.50','img/index/case/case3.jpg','case_details.html?cid=');
INSERT INTO `v1_index_case` VALUES (NULL,9,'都不及你','西宫度假酒店','6952.30','img/index/case/case4.jpg','case_details.html?cid=');
INSERT INTO `v1_index_case` VALUES (NULL,6,'藏在时光里的爱情诗','明宇尚雅饭店','32840.44','img/index/case/case5.jpg','case_details.html?cid=');
INSERT INTO `v1_index_case` VALUES (NULL,12,'时光情书','龙之梦大酒店','30601.00','img/index/case/case6.jpg','case_details.html?cid=');

-- ---------------------------------------------
-- 创建首页酒店表v1_index_hotel
-- ---------------------------------------------

DROP TABLE IF EXISTS `v1_index_hotel`;
CREATE TABLE `v1_index_hotel` (
    `index_hid` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,    #首页酒店编号
    `hid` INT DEFAULT NULL,                                 #酒店编号
    `hname` VARCHAR(10) DEFAULT NULL,                       #酒店名称
    `district` VARCHAR(6) DEFAULT NULL,                     #酒店所在区
    `hotel_pic` VARCHAR(128) DEFAULT NULL,                  #图片路径
    `hotel_href` VARCHAR(128) DEFAULT NULL                  #图片链接
);

-- ---------------------------------------------
-- 插入数据到首页酒店表 v1_index_hotel
-- ---------------------------------------------

INSERT INTO `v1_index_hotel` VALUES (NULL,3,'皇冠假日酒店','锦江区','img/index/hotel/hotel1.png','product_details.html?hid=');
INSERT INTO `v1_index_hotel` VALUES (NULL,14,'凯宾斯基饭店','武侯区','img/index/hotel/hotel2.png','product_details.html?hid=');
INSERT INTO `v1_index_hotel` VALUES (NULL,15,'茂御酒店','青羊区','img/index/hotel/hotel3.png','product_details.html?hid=');
INSERT INTO `v1_index_hotel` VALUES (NULL,16,'索菲斯锦苑宾馆','成华区','img/index/hotel/hotel4.png','product_details.html?hid=');
INSERT INTO `v1_index_hotel` VALUES (NULL,8,'墨宴','龙泉驿区','img/index/hotel/hotel5.png','product_details.html?hid=');
INSERT INTO `v1_index_hotel` VALUES (NULL,17,'怡东国际酒店','锦江区','img/index/hotel/hotel6.png','product_details.html?hid=');

-- ---------------------------------------------
-- 创建首页攻略表 v1_index_tips
-- ---------------------------------------------

DROP TABLE IF EXISTS `v1_index_tips`;
CREATE TABLE `v1_index_tips` (
    `index_tid` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,    #首页攻略编号
    `tid` INT,                                              #攻略编号
    `title` VARCHAR(128) DEFAULT NULL,                      #攻略标题
    `desc` VARCHAR(256) DEFAULT NULL,                       #攻略描述
    `tip_pic` VARCHAR(128) DEFAULT NULL,                    #图片路径
    `tip_href` VARCHAR(128) DEFAULT NULL                    #跳转链接
);

-- ---------------------------------------------
-- 插入数据到首页酒店表 v1_index_hotel
-- ---------------------------------------------

INSERT INTO `v1_index_tips` VALUES (NULL,1,'买婚纱好还是租婚纱好','婚纱在婚礼上只能穿一次，以后就没用处了，所以很多新娘纠结到底是买婚纱好还是租婚纱好，等你看完这篇文章，保证不再纠结。','img/index/tips/tip1.png','tip_details.html?tid=1');
INSERT INTO `v1_index_tips` VALUES (NULL,2,'婚礼现场17款经典小游戏','结婚游戏的意义主要有两个：一个是活跃婚礼的气氛；另一个就是让新郎切实体会到迎娶新娘的艰辛，以后会更珍惜这来之不易的幸福。','img/index/tips/tip2.png','tip_details.html?tid=2');
INSERT INTO `v1_index_tips` VALUES (NULL,3,'如何选择婚纱影楼','选择婚纱影楼要考虑口碑、服务、价格等因素，确定选项之后，新人们最好去实体店详细的咨询，对比之后再做决定。','img/index/tips/tip3.png','tip_details.html?tid=3');
INSERT INTO `v1_index_tips` VALUES (NULL,4,'最详细的备婚攻略','结婚对于新人而言，不仅是一件幸福的事，也是一件耗时耗力的麻烦事。新人至少得提前三个月就开始准备结婚的各项事情。','img/index/tips/tip4.png','tip_details.html?tid=4');

-- ---------
-- 创建用户表
-- ---------

DROP TABLE IF EXISTS `v1_user`;
CREATE TABLE `v1_user` (
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

INSERT INTO `v1_user` VALUES(NULL,'jianli','高渐离','gjl_123456','13584025123','jianli@163.com',1,'img/avater/user/101.jpg');
INSERT INTO `v1_user` VALUES(NULL,'shaoyou','秦少游','qsy_123456','13770857623','qin@126.com',1,'img/avater/user/102.jpg');
INSERT INTO `v1_user` VALUES(NULL,'xliang','萧良','xl_123456','13675110083','xiao@139.com',1,'img/avater/user/103.jpg');
INSERT INTO `v1_user` VALUES(NULL,'Hao','张昊','zh_123456','15105182245','716653824@qq.com',1,'img/avater/user/104.jpg');
INSERT INTO `v1_user` VALUES(NULL,'liuxu','刘旭','lx_123456','18951812066','224355678@qq.com',1,'img/avater/user/105.jpg');
INSERT INTO `v1_user` VALUES(NULL,'刺秦','靳柯','jk_123456','13584025123','keke@163.com',1,'img/avater/user/106.jpg');
INSERT INTO `v1_user` VALUES(NULL,'君临天下','王临','wl_123456','15265058838','wlin@126.com',1,'img/avater/user/107.jpg');
INSERT INTO `v1_user` VALUES(NULL,'Yfeng','沈毅峰','syf_123456','13256633672','syf@163.com',1,'img/avater/user/108.jpg');
INSERT INTO `v1_user` VALUES(NULL,'谦谦君子','马玮谦','mqw_123456','13882253862','267453169@qq.com',1,'img/avater/user/109.jpg');
INSERT INTO `v1_user` VALUES(NULL,'Boat','林一舟','gjl_123456','18765020968','boat@139.com',1,'img/avater/user/110.jpg');
INSERT INTO `v1_user` VALUES(NULL,'Fish','鱼幼薇','yyw_123456','13584025123','vivi@163.com',0,'img/avater/user/001.jpg');
INSERT INTO `v1_user` VALUES(NULL,'caicai','蔡文姬','cc_123456','13854016888','caicai@163.com',0,'img/avater/user/002.jpg');
INSERT INTO `v1_user` VALUES(NULL,'QWY','秦舞阳','qwy_123456','13266335880','554378231@qq.com',0,'img/avater/user/003.jpg');
INSERT INTO `v1_user` VALUES(NULL,'春夏冬','陈沐秋','qiu_123456','15908138303','mumu@139.com',0,'img/avater/user/004.jpg');
INSERT INTO `v1_user` VALUES(NULL,'Moon','白月初','byc_123456','13869774769','white@139.com',0,'img/avater/user/005.jpg');
INSERT INTO `v1_user` VALUES(NULL,'婷婷','展雨婷','zyt_123456','15052678309','664321588@qq.com',0,'img/avater/user/006.jpg');
INSERT INTO `v1_user` VALUES(NULL,'一诺千金','许诺','xn_123456','18108234567','xunuo@126.com',0,'img/avater/user/007.jpg');
INSERT INTO `v1_user` VALUES(NULL,'Su','苏妍','sy_123456','15198862217','yan@126.com',0,'img/avater/user/008.jpg');
INSERT INTO `v1_user` VALUES(NULL,'非雾','师半烟','by_123456','13770019096','shishi@126.com',0,'img/avater/user/009.jpg');
INSERT INTO `v1_user` VALUES(NULL,'冉冉','慕冉','mr_123456','18995101809','718833652@qq.com',0,'img/avater/user/010.jpg');

-- ----------------
-- 创建案例表v1_case
-- ----------------

DROP TABLE IF EXISTS `v1_case`;
CREATE TABLE `v1_case` (
    `cid` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,      #案例编号
    `cname` VARCHAR(32) DEFAULT NULL,                   #案例名称
    `cstyle` VARCHAR(5) DEFAULT NULL,                   #案例风格
--    `site`  VARCHAR(5) DEFAULT NULL,                    #案例场地
    `price` DECIMAL(9,2) DEFAULT NULL,                  #案例参考价格
    `watched` INT DEFAULT NULL,                         #浏览量
    `case_details` VARCHAR(128) DEFAULT NULL,           #案例详情
    `ctime` VARCHAR(64) DEFAULT NULL,                   #案例日期
    `hid` INT  DEFAULT NULL,                            #酒店编号
    `plan_id` INT  DEFAULT NULL,                        #策划师编号
    `dress_id` INT  DEFAULT NULL,                       #化妆师编号
    `present_id` INT  DEFAULT NULL,                     #主持人编号
    `photo_id` INT  DEFAULT NULL,                       #摄影师编号
    `video_id` INT  DEFAULT NULL                        #摄像师编号
);
INSERT INTO `v1_case` VALUES (NULL,"小星星小浪漫","室内、梦幻","11795.00","49","看天边划过的流星，我堵上自己的爱情；<br />期待你的姓配上我的名，走完一辈子的光阴；<br />从夜半走到清晨，你是我夜空中最亮的星！","2018年11月17日",1,1,6,3,8,1);
INSERT INTO `v1_case` VALUES (NULL,"果实","室外、小清新","14342.00","39","愿与你种下爱的果实，俯瞰收获甜美的日子；<br />把温馨的情话，揉进我凌乱的诗句，捧在心上送你！","2018年11月19日",2,2,6,3,8,1);
INSERT INTO `v1_case` VALUES (NULL,"玫瑰演绎无言的爱","室内、复古","32164.87","219","殷红的玫瑰馥郁芬芳，在夜空中绽放最幸福的姿态！","2018年11月04日",3,3,6,3,8,1);
INSERT INTO `v1_case` VALUES (NULL,"你的爱逆光而来","室内、梦幻","43921.00","319","爱上一个人，就像一棵树拼命想要开花的心情，哪怕枝桠被折断，也要在断枝上发出新芽。<br />我遇见你，就像开花了。","2018年11月17日",4,4,6,3,8,1);
INSERT INTO `v1_case` VALUES (NULL,"Gift","室内、森系","14282.00","752","有你的日子甜甜的，像香醇的酒水，像冬日的暖阳。<br />你就是上天赐给我的最好的礼物！","2018年10月05日",5,5,6,3,8,1);
INSERT INTO `v1_case` VALUES (NULL,"藏在时光里的爱情诗","室外、韩式","32840.44","512","我想和你虚度时光。<br />比如低头看鱼；<br />比如把茶杯留在桌子上，离开，浪费它们好看的阴影；<br />我还想连落日一起浪费。<br />比如散步，一直消磨到星光满天...","2018年11月04日",6,6,6,3,8,1);
INSERT INTO `v1_case` VALUES (NULL,"你喜欢的样子","室外、小清新","21500.00","275","紫藤花语：醉人的恋情，依依的思念，对你的执着，最幸福的时刻！","2018年10月18日",7,7,6,3,8,1);
INSERT INTO `v1_case` VALUES (NULL,"喜欢你","室外、唯美","14358.50","255","我喜欢春天的花、夏天的树、秋天的黄昏、冬天的太阳，还有每天的你！","2018年11月11日",8,8,6,3,8,1);
INSERT INTO `v1_case` VALUES (NULL,"都不及你","室内、中国风","6952.3","537","我见过清山如黛，却不及你眉眼；<br />我听过秋水泠泠，却不及你呢喃；<br />我闻过春日花香，却不及你芬芳；<br />我吻过冬日暖阳，却不及你的嘴唇","2018年07月21日",9,9,6,3,8,1);
INSERT INTO `v1_case` VALUES (NULL,"钦与矜君","室内、中国风","32630.00","201","桃红柳绿繁华盛，春荣秋谢夏花浓。<br />韶华不易当举案，才子佳人复齐眉。<br />莫失莫忘，君心似我心。<br />不离不弃，夏诺亦永诺。","2018年08月18日",10,10,6,3,8,1);
INSERT INTO `v1_case` VALUES (NULL,"雨中说爱你","室外、森系","21500.00","158","蒙蒙细雨，抛却了城市的喧闹和浮躁；<br />雨中的雾气，有独特的浪漫气息。","2018年09月23日",7,7,6,3,8,1);
INSERT INTO `v1_case` VALUES (NULL,"时光情书","室内、梦幻","30601.00","260","这是我给你的时光情书，想给你一个温暖的归宿；<br />不让你哭，不让你孤独，陪你走幸福旅途；<br />我愿意为你去义无反顾，笑着承担未来所有难度","2017年12月24日",11,11,6,3,8,1);
INSERT INTO `v1_case` VALUES (NULL,"期约","室内、复古","33900.00","221","在适当的时间遇上心上的你，一切都刚刚好。","2018年01月13日",12,6,6,3,8,1);
INSERT INTO `v1_case` VALUES (NULL,"陪伴","室内、韩式","11584.00","368","7年，从同窗到恋人再到爱人，一直彼此陪伴，不离不弃。<br />在城里的每一个地点，老旧仓库、山野公路、花房乐园，每一个有你的地方，都被写上了爱情。<br />有你，就有风花雪月！","2017年06月10日",13,12,6,3,8,1);
INSERT INTO `v1_case` VALUES (NULL,"信仰","室内、 唯美","18948.00","218","以爱情为信仰，在神圣的教堂里，郑重的许下我这一生的承诺！<br />纯白的教堂神圣高雅 + 橙红的枫叶热烈盛放，像我们的爱情，纯粹美好，迎来最幸福的丰收！","2018年09月01日",3,13,6,3,8,1);

-- -------------------------
-- 创建案例图片v1_case_pic
-- -------------------------

DROP TABLE IF EXISTS `v1_case_pic`;
CREATE TABLE `v1_case_pic` (
    `case_pic_id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,  #图片编号
    `cid` INT  DEFAULT NULL,                                #案例编号
    `case_pic_0` VARCHAR(128) DEFAULT NULL,                 #图片0
    `case_pic_1` VARCHAR(128) DEFAULT NULL,                 #图片1
    `case_pic_2` VARCHAR(128) DEFAULT NULL,                 #图片2
    `case_pic_3` VARCHAR(128) DEFAULT NULL,                 #图片3
    `case_pic_4` VARCHAR(128) DEFAULT NULL,                 #图片4
    `case_pic_5` VARCHAR(128) DEFAULT NULL                  #图片5
);
INSERT INTO `v1_case_pic` VALUES (NULL,1,"img/case/c1-0.jpg","img/case/c1-1.jpg","img/case/c1-2.jpg","img/case/c1-3.jpg","img/case/c1-4.jpg","img/case/c1-5.jpg");
INSERT INTO `v1_case_pic` VALUES (NULL,2,"img/case/c2-0.jpg","img/case/c2-1.jpg","img/case/c2-2.jpg","img/case/c2-3.jpg","img/case/c2-4.jpg","img/case/c2-5.jpg");
INSERT INTO `v1_case_pic` VALUES (NULL,3,"img/case/c3-0.jpg","img/case/c3-1.jpg","img/case/c3-2.jpg","img/case/c3-3.jpg","img/case/c3-4.jpg","img/case/c3-5.jpg");
INSERT INTO `v1_case_pic` VALUES (NULL,4,"img/case/c4-0.jpg","img/case/c4-1.jpg","img/case/c4-2.jpg","img/case/c4-3.jpg","img/case/c4-4.jpg","img/case/c4-5.jpg");
INSERT INTO `v1_case_pic` VALUES (NULL,5,"img/case/c5-0.jpg","img/case/c5-1.jpg","img/case/c5-2.jpg","img/case/c5-3.jpg","img/case/c5-4.jpg","img/case/c5-5.jpg");
INSERT INTO `v1_case_pic` VALUES (NULL,6,"img/case/c6-0.jpg","img/case/c6-1.jpg","img/case/c6-2.jpg","img/case/c6-3.jpg","img/case/c6-4.jpg","img/case/c6-5.jpg");
INSERT INTO `v1_case_pic` VALUES (NULL,7,"img/case/c7-0.jpg","img/case/c7-1.jpg","img/case/c7-2.jpg","img/case/c7-3.jpg","img/case/c7-4.jpg","img/case/c7-5.jpg");
INSERT INTO `v1_case_pic` VALUES (NULL,8,"img/case/c8-0.jpg","img/case/c8-1.jpg","img/case/c8-2.jpg","img/case/c8-3.jpg","img/case/c8-4.jpg","img/case/c8-5.jpg");
INSERT INTO `v1_case_pic` VALUES (NULL,9,"img/case/c9-0.jpg","img/case/c9-1.jpg","img/case/c9-2.jpg","img/case/c9-3.jpg","img/case/c9-4.jpg","img/case/c9-5.jpg");
INSERT INTO `v1_case_pic` VALUES (NULL,10,"img/case/c10-0.jpg","img/case/c10-1.jpg","img/case/c10-2.jpg","img/case/c10-3.jpg","img/case/c10-4.jpg","img/case/c10-5.jpg");
INSERT INTO `v1_case_pic` VALUES (NULL,11,"img/case/c11-0.jpg","img/case/c11-1.jpg","img/case/c11-2.jpg","img/case/c11-3.jpg","img/case/c11-4.jpg","img/case/c11-5.jpg");
INSERT INTO `v1_case_pic` VALUES (NULL,12,"img/case/c12-0.jpg","img/case/c12-1.jpg","img/case/c12-2.jpg","img/case/c12-3.jpg","img/case/c12-4.jpg","img/case/c12-5.jpg");
INSERT INTO `v1_case_pic` VALUES (NULL,13,"img/case/c13-0.jpg","img/case/c13-1.jpg","img/case/c13-2.jpg","img/case/c13-3.jpg","img/case/c13-4.jpg","img/case/c13-5.jpg");
INSERT INTO `v1_case_pic` VALUES (NULL,14,"img/case/c14-0.jpg","img/case/c14-1.jpg","img/case/c14-2.jpg","img/case/c14-3.jpg","img/case/c14-4.jpg","img/case/c14-5.jpg");
INSERT INTO `v1_case_pic` VALUES (NULL,15,"img/case/c15-0.jpg","img/case/c15-1.jpg","img/case/c15-2.jpg","img/case/c15-3.jpg","img/case/c15-4.jpg","img/case/c15-5.jpg");

-- --------------
-- 酒店表v1_hotel
-- --------------

DROP TABLE IF EXISTS `v1_hotel`;
CREATE TABLE `v1_hotel` (
    `hid` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,      #酒店编号
    `hname` VARCHAR(32) DEFAULT NULL                    #酒店名称
);
INSERT INTO `v1_hotel` VALUES (1,'红杏酒家');
INSERT INTO `v1_hotel` VALUES (2,'圣索亚酒店');
INSERT INTO `v1_hotel` VALUES (3,'皇冠假日酒店');
INSERT INTO `v1_hotel` VALUES (4,'世纪城洲际酒店');
INSERT INTO `v1_hotel` VALUES (5,'美炉家宴馆');
INSERT INTO `v1_hotel` VALUES (6,'明宇尚雅饭店');
INSERT INTO `v1_hotel` VALUES (7,'老房子');
INSERT INTO `v1_hotel` VALUES (8,'墨宴');
INSERT INTO `v1_hotel` VALUES (9,'西宫度假酒店');
INSERT INTO `v1_hotel` VALUES (10,'国安假日酒店');
INSERT INTO `v1_hotel` VALUES (11,'龙之梦大酒店');
INSERT INTO `v1_hotel` VALUES (12,'玉瑞酒店');
INSERT INTO `v1_hotel` VALUES (13,'新老茶树酒店');
INSERT INTO `v1_hotel` VALUES (14,'凯宾斯基饭店');
INSERT INTO `v1_hotel` VALUES (15,'茂御酒店');
INSERT INTO `v1_hotel` VALUES (16,'索菲斯锦苑宾馆');
INSERT INTO `v1_hotel` VALUES (17,'怡东国际酒店');
INSERT INTO `v1_hotel` VALUES (18,'怡东国际酒店');
INSERT INTO `v1_hotel` VALUES (19,'皇冠假日酒店');
INSERT INTO `v1_hotel` VALUES (20,'皇冠假日酒店');

-- ------------------
-- 策划师表v1_planner
-- ------------------

DROP TABLE IF EXISTS `v1_planner`;
CREATE TABLE `v1_planner` (
    `plan_id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,      #策划师编号
    `plan_name` VARCHAR(32) DEFAULT NULL                    #策划师名字
);
INSERT INTO `v1_planner` VALUES (1,'何先生HMY');
INSERT INTO `v1_planner` VALUES (2,'梦梦');
INSERT INTO `v1_planner` VALUES (3,'Jacy');
INSERT INTO `v1_planner` VALUES (4,'小青');
INSERT INTO `v1_planner` VALUES (5,'Cathy');
INSERT INTO `v1_planner` VALUES (6,'Aliao');
INSERT INTO `v1_planner` VALUES (7,'郭华');
INSERT INTO `v1_planner` VALUES (8,'陈静');
INSERT INTO `v1_planner` VALUES (9,'李秋薇');
INSERT INTO `v1_planner` VALUES (10,'余淡');
INSERT INTO `v1_planner` VALUES (11,'Moon');
INSERT INTO `v1_planner` VALUES (12,'唐唐');
INSERT INTO `v1_planner` VALUES (13,'Carl');