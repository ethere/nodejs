-- 增加语句

INSERT INTO `student`(classid, sNo, `name`, birth, sex, phone, address)
VALUES(2, 2019, '丁西', '2019-01-02', DEFAULT(sex), 12345, 'hunan');

INSERT INTO `student`(classid,sNo,`name`,birth,sex,phone,address)
VALUES(2,2019,'王菲','2012-01-03', 0,12345,'hunan'),
(2,2020,'王洁','2012-01-03',0 ,12345,'hunan');