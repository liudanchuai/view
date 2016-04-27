-- MySQL dump 10.13  Distrib 5.7.9, for Win64 (x86_64)
--
-- Host: localhost    Database: hotel
-- ------------------------------------------------------
-- Server version	5.7.11-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `book`
--


--
-- Dumping data for table `book_room`
--


--
-- Dumping data for table `check_in`
--

INSERT INTO check_in VALUES (3,'104',3000009,0,'2016-04-26 15:30:46','2016-04-26 15:30:46','S',NULL,NULL,'2016-04-15 17:00:00','男',NULL,'IdCard',NULL,'SK',NULL,NULL,NULL,'3',NULL,200,'MS',NULL,NULL,NULL,'day',NULL);

--
-- Dumping data for table `check_in_history`
--

INSERT INTO check_in_history VALUES (4,'210103199001311818',NULL,'舒展','男',NULL,NULL,NULL);

--
-- Dumping data for table `check_in_history_log`
--

INSERT INTO check_in_history_log VALUES (4,'210103199001311818',3000008,'101');

--
-- Dumping data for table `check_in_same`
--

INSERT INTO check_in_same VALUES (1,NULL,'210102196604025642','胡芳',NULL,'女','汉族','IdCard','新世界花园');

--
-- Dumping data for table `check_out`
--

INSERT INTO check_out VALUES (1,5000000,'101','2016-04-27 16:30:01',0,0,NULL,'SK','day',NULL);

--
-- Dumping data for table `check_out_group_room`
--

INSERT INTO check_out_group_room VALUES (2,5000000,'101',3000008);

--
-- Dumping data for table `company`
--


--
-- Dumping data for table `company_debt`
--


--
-- Dumping data for table `company_lord`
--


--
-- Dumping data for table `currency`
--

INSERT INTO currency VALUES (1,'RMB','人民币');

--
-- Dumping data for table `debt`
--

INSERT INTO debt VALUES (1,'2016-04-25 16:29:20','100',0,500,'RMB','押金',3000008,0,'101',NULL,'MS',NULL);
INSERT INTO debt VALUES (2,'2016-04-26 15:30:46','100',0,NULL,'RMB','押金',3000009,0,'104',NULL,'MS',NULL);

--
-- Dumping data for table `debt_history`
--

INSERT INTO debt_history VALUES (3,1000000,'2016-04-25 16:29:20','100',0,500,'押金',3000008,0,'101','2016-04-27 16:30:01',NULL);

--
-- Dumping data for table `debt_pay`
--

INSERT INTO debt_pay VALUES (1,1000000,5000000,0,'RMB','2016-04-27 16:30:01','离店结算','离店结算结账记录','100',3000008,0,NULL);

--
-- Dumping data for table `guest_source`
--

INSERT INTO guest_source VALUES (1,'SK','散客');

--
-- Dumping data for table `hour_room`
--

INSERT INTO hour_room VALUES (1,'MS','BJ',3,50,1,10,100);

--
-- Dumping data for table `other_param`
--

INSERT INTO other_param VALUES (1,'JSFZ','Y','是否加收房租');

--
-- Dumping data for table `pos`
--


--
-- Dumping data for table `pricecategory`
--


--
-- Dumping data for table `protocol`
--

INSERT INTO protocol VALUES (2,'MS','门市价','BJ',180,'2');
INSERT INTO protocol VALUES (3,'WG','网购','BJ',170,'3');
INSERT INTO protocol VALUES (4,'MS','门市价','DC',200,'3');
INSERT INTO protocol VALUES (5,'WG','网购','DC',190,'4');

--
-- Dumping data for table `room`
--

INSERT INTO room VALUES (1,'101','1','BJ',180,'2',2,'L',1);
INSERT INTO room VALUES (2,'102','1','BJ',180,'2',2,'V',0);
INSERT INTO room VALUES (3,'103','1','BJ',180,'2',2,'V',0);
INSERT INTO room VALUES (4,'104','1','DC',200,'3',3,'S',0);

--
-- Dumping data for table `room_category`
--

INSERT INTO room_category VALUES (1,'BJ','标准间');
INSERT INTO room_category VALUES (2,'DC','大床房');

--
-- Dumping data for table `room_price_add`
--

INSERT INTO room_price_add VALUES (1,'12:00:00',0.5,100);

--
-- Dumping data for table `serial`
--

INSERT INTO serial VALUES (1,1000001,2000000,3000010,4000000,5000001);

--
-- Dumping data for table `user`
--

INSERT INTO user VALUES (1,'1001','舒展','0','JQ','9','100');
INSERT INTO user VALUES (2,'2',NULL,NULL,NULL,NULL,NULL);
INSERT INTO user VALUES (3,'3',NULL,NULL,NULL,NULL,NULL);

--
-- Dumping data for table `user_log`
--

INSERT INTO user_log VALUES (1,NULL,'开房:104 押金:undefined','KF','2016-04-26 15:30:46');
INSERT INTO user_log VALUES (2,NULL,'离店结算:101 结算款:0','JZ','2016-04-27 16:30:01');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed
