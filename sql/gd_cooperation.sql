SET NAMES UTF8;

USE gudong;

CREATE TABLE gd_cooperation(
  cid TINYINT PRIMARY KEY,
  cname VARCHAR(16),
  email VARCHAR(32)
);

INSERT INTO gd_cooperation VALUES
(1,'品牌合作','branding@codoon.com'),
(2,'媒体&PR','pr@codoon.com'),
(3,'赛事合作','race@codoon.com'),
(4,'企业运动与健康管理','club@codoon.com'),
(5,'咕咚产品代理与销售','productagent@codoon.com'),
(6,'广告销售代理','advertising@codoon.com'),
(7,'跑团业务','runningclub@codoon.com'),
(8,'API基础数据服务','apidata@codoon.com'),
(9,'联名及其他服务','lianming@codoon.com')