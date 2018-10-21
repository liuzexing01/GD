SET NAMES UTF8;

USE gudong;

CREATE TABLE gd_sports(
  sid TINYINT PRIMARY KEY,
  sname VARCHAR(16),
  address VARCHAR(8),
  details VARCHAR(16),
  background VARCHAR(64),
  pic VARCHAR(64)
);

INSERT INTO gd_sports VALUES
(1,'驰骋快跑','北京','北邮&北师跑场','img/market-run3.3c486.png','img/2a.9db8e.png'),
(2,'panda','北京','北京学院桥跑场','img/market-run4.598d6.png','img/3a.a4700.png'),
(3,'自然之子637','北京','朝阳公园跑场','img/market-run1.6c2e4.png','img/7a.e5b79.png'),
(4,'虎跑','北京','奥林匹克公园跑场','img/market-run2.20d93.png','img/8a.e7c28.png'),
(5,'柯金佳','深圳','东湖公园五公里跑场','img/market-run3.3c486.png','img/14a.0b7ec.png'),
(6,'龙哥','深圳','锦城湖跑场','img/market-run4.598d6.png','img/15a.61f18.png'),
(7,'马赛克465','深圳','中心公园跑场','img/market-run6.852d3.png','img/16a.47538.png'),
(8,'harry59','深圳','宝安体育跑场','img/market-run8.eb7d2.png','img/17a.44db7.png'),
(9,'小凡','成都','川大望江校区跑场','img/market-run9.d463d.png','img/8a.e7c28.png'),
(10,'从零开始','成都','玉渊潭跑场','img/market-run11.2fe29.png','img/16a.47538.png'),
(11,'陌','成都','成都信息工程大学跑场','img/market-run12.50dac.png','img/2a.9db8e.png'),
(12,'啊哈哈','成都','成都体育中心跑场','img/market-run13.65d59.png','img/14a.0b7ec.png')