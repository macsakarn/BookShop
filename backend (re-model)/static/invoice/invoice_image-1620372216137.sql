-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: 999auto
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `account`
--

DROP TABLE IF EXISTS `account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `account` (
  `account_id` int NOT NULL AUTO_INCREMENT,
  `user_username` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `user_password` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `user_user_id` int NOT NULL,
  PRIMARY KEY (`account_id`),
  KEY `user_id_idx` (`user_user_id`),
  CONSTRAINT `idx_account_user_user_id` FOREIGN KEY (`user_user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account`
--

LOCK TABLES `account` WRITE;
/*!40000 ALTER TABLE `account` DISABLE KEYS */;
INSERT INTO `account` VALUES (1,'Jornsnow','Jornsnow123',1),(2,'kaimookcmcafe','kaimookcmcafe999',2),(3,'nattapontanee','nattapontanee11',3),(4,'rineesaptaweekarn','rineesaptaweekarn69',4),(5,'toosapthaweekarn','toosapthaweekarn69',5),(6,'mookmik','mookmik78',6),(7,'champwow','champwow33',7),(8,'renaharn','renaharn42',8),(9,'flukejirayu','flukejirayu999',9),(10,'annaloca','annaloca55',10),(11,'Pookthongjid','Pookthongjid89',11),(12,'nonnatchanon','nonnatchanon36',12),(13,'bankdokkathin','bankdokkathin19',13),(14,'pingkainaitamnan','pingkainaitamnan72',14),(15,'jeableabduan','jeableabduan11',15),(16,'BillGates','BillGates99',16),(17,'it62070035','$2b$05$M9FePCLDSPhOx5QqzrBOD.yP5ogWouPURUeDUdvsGEEI3jEugW2ri',17),(18,'BBBBBB','$2b$05$ZC69cte8JzgkGKblHqSJDu9VjnWFojH/5cDGbzX7m3r0Q8mzCgt0.',18);
/*!40000 ALTER TABLE `account` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order`
--

DROP TABLE IF EXISTS `order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order` (
  `order_id` int NOT NULL AUTO_INCREMENT,
  `delivery_date` date DEFAULT NULL,
  `order_date` date DEFAULT NULL,
  `price_of_all_item` float(8,2) DEFAULT NULL,
  `amount_of_all_item` int DEFAULT NULL,
  `user_user_id` int NOT NULL,
  PRIMARY KEY (`order_id`),
  KEY `user_id2_idx` (`user_user_id`),
  KEY `idx_order_order_id` (`order_id`),
  CONSTRAINT `idx2_user_user_id` FOREIGN KEY (`user_user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order`
--

LOCK TABLES `order` WRITE;
/*!40000 ALTER TABLE `order` DISABLE KEYS */;
INSERT INTO `order` VALUES (8,'2021-04-30','2021-03-30',4700.00,4,1),(9,'2021-04-30','2021-03-30',7100.00,9,2),(10,'2021-06-21','2021-03-30',7500.00,6,3),(11,'2021-07-19','2021-03-30',6800.00,5,4),(12,'2021-07-20','2021-03-30',23000.00,19,5),(13,'2021-05-07','2021-03-30',31200.00,14,6),(14,'2021-05-07','2021-03-30',41200.00,14,7),(15,'2021-05-07','2021-03-30',41200.00,14,8),(16,'2021-05-19','2021-04-02',3800.00,1,1),(17,'2021-05-28','2021-04-02',1200.00,1,1),(18,'2021-05-18','2021-04-02',3200.00,2,1),(19,'2021-05-06','2021-04-02',21200.00,9,1),(20,'2021-05-20','2021-04-02',16650.00,11,1),(21,'2021-06-03','2021-04-02',1700.00,1,1),(22,'2021-05-02','2021-04-02',5500.00,1,1),(23,'2021-05-02','2021-04-02',1700.00,1,17),(24,'2021-05-19','2021-04-02',1800.00,1,17),(25,'2021-05-03','2021-04-03',8250.00,3,17),(26,'2021-05-19','2021-04-03',2950.00,3,17),(27,'2021-05-03','2021-04-03',1700.00,1,17),(28,'2021-05-03','2021-05-03',2000.00,1,17),(29,'2021-05-01','2021-05-03',7200.00,4,17),(30,'2021-06-02','2021-05-04',1700.00,1,17),(31,'2019-09-02','2021-05-05',6900.00,2,17),(32,'2021-05-06','2021-05-06',3500.00,1,18),(33,'2021-05-13','2021-05-06',31700.00,9,18),(34,'2021-05-28','2021-05-06',7700.00,5,18),(35,'2021-06-03','2021-05-06',3900.00,3,18),(36,'2021-05-29','2021-05-06',17800.00,6,18),(37,'2021-05-29','2021-05-06',12100.00,4,18),(38,'2021-06-05','2021-05-06',1000.00,1,18),(39,'2021-05-29','2021-05-06',4800.00,2,18);
/*!40000 ALTER TABLE `order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_item`
--

DROP TABLE IF EXISTS `order_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_item` (
  `item_no` int NOT NULL AUTO_INCREMENT,
  `item_amount` int DEFAULT NULL,
  `item_price` float DEFAULT NULL,
  `total_price` float DEFAULT NULL,
  `order_order_id` int NOT NULL,
  `product_product_id` int NOT NULL,
  PRIMARY KEY (`item_no`,`order_order_id`),
  KEY `order_id_idx` (`order_order_id`),
  KEY `product_id_idx` (`product_product_id`),
  CONSTRAINT `idx_order_order_id` FOREIGN KEY (`order_order_id`) REFERENCES `order` (`order_id`),
  CONSTRAINT `idx_product_product_id` FOREIGN KEY (`product_product_id`) REFERENCES `product` (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=108 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_item`
--

LOCK TABLES `order_item` WRITE;
/*!40000 ALTER TABLE `order_item` DISABLE KEYS */;
INSERT INTO `order_item` VALUES (21,2,1200,2400,8,54),(22,1,1300,1300,8,15),(23,1,1000,1000,8,46),(24,3,650,1950,8,8),(25,4,800,3200,8,6),(26,1,950,950,8,3),(27,1,1000,1000,8,46),(28,3,1200,3600,8,24),(29,3,1300,3900,8,15),(30,3,1600,4800,11,4),(31,2,1000,2000,11,46),(32,9,1600,14400,11,20),(33,6,800,4800,11,6),(34,4,950,3800,11,3),(35,5,1700,8500,11,39),(36,2,1800,3600,11,86),(37,5,2900,14500,11,1),(38,2,2300,4600,11,23),(39,2,2500,5000,11,2),(40,4,1800,7200,11,14),(41,3,1800,5400,11,70),(42,3,6200,18600,11,29),(43,2,2500,5000,11,37),(44,2,2500,5000,11,2),(45,4,1800,7200,11,14),(46,3,1800,5400,11,70),(47,3,6200,18600,11,29),(48,2,2500,5000,11,37),(49,1,3800,3800,16,27),(50,1,1200,1200,17,24),(51,2,1600,3200,18,4),(52,1,1200,1200,19,54),(53,4,2500,10000,19,19),(54,4,2500,10000,19,19),(55,3,950,2850,20,3),(56,2,1300,2600,20,15),(57,1,1200,1200,20,54),(58,1,3900,3900,20,25),(59,1,1000,1000,20,46),(60,1,1600,1600,20,62),(61,1,1700,1700,20,39),(62,1,1800,1800,20,86),(63,1,1700,1700,21,30),(64,1,5500,5500,22,35),(65,1,1700,1700,23,30),(66,1,1800,1800,24,70),(67,1,3500,3500,25,26),(68,1,950,950,25,3),(69,1,3800,3800,25,27),(70,1,950,950,26,3),(71,1,1000,1000,26,46),(72,1,1000,1000,26,46),(73,1,1700,1700,27,39),(74,1,2000,2000,28,47),(75,1,1800,1800,29,5),(76,1,3500,3500,29,26),(77,1,950,950,29,3),(78,1,950,950,29,3),(79,1,1700,1700,30,39),(80,1,2000,2000,31,94),(81,1,4900,4900,31,34),(82,1,3500,3500,32,26),(83,1,2900,2900,33,1),(84,1,3500,3500,33,38),(85,1,5900,5900,33,31),(86,1,5500,5500,33,35),(87,1,4700,4700,33,33),(88,1,1700,1700,33,30),(89,3,2500,7500,33,2),(90,3,1600,4800,34,4),(91,1,1700,1700,34,39),(92,1,1200,1200,34,54),(93,1,1000,1000,35,46),(94,1,1200,1200,35,54),(95,1,1700,1700,35,39),(96,1,2900,2900,36,1),(97,1,3500,3500,36,38),(98,1,1200,1200,36,54),(99,1,3900,3900,36,25),(100,1,3500,3500,36,26),(101,1,2800,2800,36,17),(102,1,1800,1800,37,5),(103,2,3900,7800,37,25),(104,1,2500,2500,37,28),(105,1,1000,1000,38,46),(106,1,2500,2500,39,28),(107,1,2300,2300,39,23);
/*!40000 ALTER TABLE `order_item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `owner`
--

DROP TABLE IF EXISTS `owner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `owner` (
  `owner_id` int NOT NULL AUTO_INCREMENT,
  `owner_username` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `owner_password` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`owner_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `owner`
--

LOCK TABLES `owner` WRITE;
/*!40000 ALTER TABLE `owner` DISABLE KEYS */;
INSERT INTO `owner` VALUES (1,'Fluke','FFDknk99'),(2,'nattapontanee','nattapontanee11'),(3,'champwow','champwow33');
/*!40000 ALTER TABLE `owner` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `product_id` int NOT NULL AUTO_INCREMENT,
  `product_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `category` enum('camera','film','radio','sensor','speaker') CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `storge_date` tinyint DEFAULT '1',
  PRIMARY KEY (`product_id`),
  KEY `idx_product_product_id` (`product_id`),
  KEY `idx2_product_product_id` (`product_id`),
  KEY `id3` (`product_id`),
  KEY `id4` (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=95 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'ปรีโม','speaker',1),(2,'ปรีโม7แบน','speaker',1),(3,'ลำโพงแกนร่วม fokke','speaker',1),(4,'ลำโพงแกนร่วมfokker','speaker',1),(5,'ลำโพงแกนร่วม bostwick','speaker',1),(6,'ลำโพงเสียงกลางทางเดียว','speaker',1),(7,'ลำโพงซับ','speaker',1),(8,'HI-520','speaker',1),(9,'Softball','speaker',1),(10,'CD-120.4','speaker',1),(11,'IP-864','speaker',1),(12,'Power class d','speaker',1),(13,'AB50.4TUBE','speaker',1),(14,'ลำโพงเสียงกลาง','speaker',1),(15,'FK-C1.5','speaker',1),(16,'BGx-1694N','speaker',1),(17,'equator กุญแจtoyota','sensor',1),(18,'รีโมทเซ็นทรัลล็อค','sensor',1),(19,'equator','sensor',1),(20,'เซ็นเซอร์ถอยหลัง','sensor',1),(23,'เซ็นเซอร์ถอยหลัง 4 จุด','sensor',1),(24,'กล้องถอยหลัง','sensor',1),(25,'MG2','camera',1),(26,'กล้องบันทึกหน้าหลัง2k','camera',1),(27,'กล้องบันทึกครอบกระจกหน้าหลัง','camera',1),(28,'DVR-315','camera',1),(29,'ZS-916','radio',1),(30,'HOKADIO','radio',1),(31,'AD-10U','radio',1),(32,'ZS-7011','radio',1),(33,'A7P522','radio',1),(34,'ZS-7012','radio',1),(35,'KD-AVX11','radio',1),(36,'T-RB1','speaker',1),(37,'BARCELONA','radio',1),(38,'KD-T408','radio',1),(39,'ALASKA(กระบะ)','film',1),(40,'ALASKA(กระบะแค็ป)','film',1),(41,'ALASKA(กระบะ4ประตู)','film',1),(42,'ALASKA(เก๋งเล็กยกเว้นHONDAเก๋งใหญื)','film',1),(43,'ALASKA(เก๋งใหญ์)','film',1),(44,'ALASKA(SUV)','film',1),(45,'ALASKA(รถตู้)','film',1),(46,'ALASKA(บาานหน้า)','film',1),(47,'ALASKAปรอท(กระบะ)','film',1),(48,'ALASKAปรอท(กระบะแค๊ป)','film',1),(49,'ALASKAปรอท(กระบะ4ประตู)','film',1),(50,'ALASKAปรอท(เก๋งเล็กยกเว้นHONDA=เก๋งใหญ่)','film',1),(51,'ALASKAปรอท(เก๋งใหญ์)','film',1),(52,'ALASKAปรอท(SUV)','film',1),(53,'ALASKAปรอท(รถตู้)','film',1),(54,'ALASKAปรอท(บานหน้า)','film',1),(55,'ALASKA CERAMIC(กระบะ)','film',1),(56,'ALASKA CERAMIC(กระบะแค๊ป)','film',1),(57,'ALASKA CERAMIC(กระบะ4ประตู)','film',1),(58,'ALASKA CERAMIC(เก๋งเล็กยกเว้นHONDA=เก๋งใหญ่)','film',1),(59,'ALASKA CERAMIC(เก๋งใหญ่)','film',1),(60,'ALASKA CERAMIC(SUV)','film',1),(61,'ALASKA CERAMIC(รถตู้)','film',1),(62,'ALASKA CERAMIC(บานหน้า)','film',1),(63,'LEGEND BLACK ICE(กระบะ)','film',1),(64,'LEGEND BLACK ICE(กระบะแค๊ป)','film',1),(65,'LEGEND BLACK ICE(กระบะ4ประตู)','film',1),(66,'LEGEND BLACK ICE(เก๋งเล็กยกเว้นHONDA=เก๋งใหญ่)','film',1),(67,'LEGEND BLACK ICE(เก๋งใหญ่)','film',1),(68,'LEGEND BLACK ICE(SUV)','film',1),(69,'LEGEND BLACK ICE(รถตู้)','film',1),(70,'LEGEND BLACK ICE(บานหน้า)','film',1),(71,'LEGEND EXP(กระบะ)','film',1),(72,'LEGEND EXP(กระบะแค๊ป)','film',1),(73,'LEGEND EXP(กระบะ4ประตู)','film',1),(74,'LEGEND EXP(เก๋งเล็กยกเว้นHONDA=เก๋งใหญ่)','film',1),(75,'LEGEND EXP(เก๋งใหญ่)','film',1),(76,'LEGEND EXP(SUV)','film',1),(77,'LEGEND EXP(รถตู้)','film',1),(78,'LEGEND EXP(บานหน้า)','film',1),(79,'LAMINA 50%-60%(กระบะ)','film',1),(80,'LAMINA 50%-60%(กระบะแค๊ป)','film',1),(81,'LAMINA 50%-60%(กระบะ4ประตู)','film',1),(82,'LAMINA 50%-60%(เก๋งเล็กยกเว้นHONDA=เก๋งใหญ่)','film',1),(83,'LAMINA 50%-60%(เก๋งใหญ่)','film',1),(84,'LAMINA 50%-60%(SUV)','film',1),(85,'LAMINA 50%-60%(รถตู้)','film',1),(86,'LAMINA 50%-60%(บานหน้า)','film',1),(87,'LAMINA 80%(กระบะ)','film',1),(88,'LAMINA 80%(กระบะแค๊ป)','film',1),(89,'LAMINA 80%(กระบะ4ประตู)','film',1),(90,'LAMINA 80%(เก๋งเล็กยกเว้นHONDA=เก๋งใหญ่)','film',1),(91,'LAMINA 80%(เก๋งใหญ่)','film',1),(92,'LAMINA 80%(SUV)','film',1),(93,'LAMINA 80%(รถตู้)','film',1),(94,'LAMINA 80%(บานหน้า)','film',1);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_inflow`
--

DROP TABLE IF EXISTS `product_inflow`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_inflow` (
  `inflow_id` int NOT NULL AUTO_INCREMENT,
  `inflow_amount` int DEFAULT NULL,
  `inflow_price` float DEFAULT NULL,
  `product_product_id` int NOT NULL,
  `inflow_date` date DEFAULT NULL,
  PRIMARY KEY (`inflow_id`,`product_product_id`),
  KEY `product_id5_idx` (`product_product_id`),
  CONSTRAINT `idx2_product_product_id` FOREIGN KEY (`product_product_id`) REFERENCES `product` (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=94 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_inflow`
--

LOCK TABLES `product_inflow` WRITE;
/*!40000 ALTER TABLE `product_inflow` DISABLE KEYS */;
INSERT INTO `product_inflow` VALUES (1,10,2900,1,'2021-04-29'),(2,18,2500,2,'2021-04-29'),(3,15,950,3,'2021-04-29'),(4,12,1600,4,'2021-04-29'),(5,5,1800,5,'2021-04-29'),(6,10,800,6,'2021-04-29'),(7,4,3900,7,'2021-04-29'),(8,3,650,8,'2021-04-29'),(9,3,3600,9,'2021-04-29'),(10,5,3800,10,'2021-04-29'),(11,5,3500,11,'2021-04-29'),(12,3,4500,12,'2021-04-29'),(13,5,3000,13,'2021-04-29'),(14,8,1800,14,'2021-04-29'),(15,6,1300,15,'2021-04-29'),(16,9,2500,16,'2021-04-29'),(17,6,2800,17,'2021-04-29'),(18,8,2800,18,'2021-04-29'),(19,4,2500,19,'2021-04-29'),(20,9,1600,20,'2021-04-29'),(21,6,2300,23,'2021-04-29'),(22,8,1200,24,'2021-04-29'),(23,5,3900,25,'2021-04-29'),(24,8,3500,26,'2021-04-29'),(25,6,3800,27,'2021-04-29'),(26,8,2500,28,'2021-04-29'),(27,3,6200,29,'2021-04-29'),(28,7,1700,30,'2021-04-29'),(29,5,5900,31,'2021-04-29'),(30,4,4000,32,'2021-04-29'),(31,3,4700,33,'2021-04-29'),(32,2,4900,34,'2021-04-29'),(33,6,5500,35,'2021-04-29'),(34,1,2900,36,'2021-04-29'),(35,2,2500,37,'2021-04-29'),(36,6,3500,38,'2021-04-29'),(37,10,1700,39,'2021-04-30'),(38,10,1900,40,'2021-04-30'),(39,10,2200,41,'2021-04-30'),(40,10,2500,42,'2021-04-30'),(41,10,2800,43,'2021-04-30'),(42,10,3200,44,'2021-04-30'),(43,10,4300,45,'2021-04-30'),(44,10,1000,46,'2021-04-30'),(45,10,2000,47,'2021-04-30'),(46,10,2300,48,'2021-04-30'),(47,10,2500,49,'2021-04-30'),(48,10,3000,50,'2021-04-30'),(49,10,3500,51,'2021-04-30'),(50,10,4000,52,'2021-04-30'),(51,10,4800,53,'2021-04-30'),(52,10,1200,54,'2021-04-30'),(53,10,3000,55,'2021-04-30'),(54,10,3500,56,'2021-04-30'),(55,10,3900,57,'2021-04-30'),(56,10,4500,58,'2021-04-30'),(57,10,4800,59,'2021-04-30'),(58,10,5000,60,'2021-04-30'),(59,10,6500,61,'2021-04-30'),(60,10,1600,62,'2021-04-30'),(61,10,3500,63,'2021-04-30'),(62,10,3800,64,'2021-04-30'),(63,10,4200,65,'2021-04-30'),(64,10,4700,66,'2021-04-30'),(65,10,5000,67,'2021-04-30'),(66,10,5500,68,'2021-04-30'),(67,10,7000,69,'2021-04-30'),(68,10,1800,70,'2021-04-30'),(69,10,4000,71,'2021-04-30'),(70,10,4500,72,'2021-04-30'),(71,10,5300,73,'2021-04-30'),(72,10,5800,74,'2021-04-30'),(73,10,6500,75,'2021-04-30'),(74,10,7000,76,'2021-04-30'),(75,10,9500,77,'2021-04-30'),(76,10,2500,78,'2021-04-30'),(77,10,3500,79,'2021-04-30'),(78,10,3800,80,'2021-04-30'),(79,10,4000,81,'2021-04-30'),(80,10,4500,82,'2021-04-30'),(81,10,4800,83,'2021-04-30'),(82,10,5500,84,'2021-04-30'),(83,10,7500,85,'2021-04-30'),(84,10,1800,86,'2021-04-30'),(85,10,3700,87,'2021-04-30'),(86,10,4000,88,'2021-04-30'),(87,10,4500,89,'2021-04-30'),(88,10,4800,90,'2021-04-30'),(89,10,5300,91,'2021-04-30'),(90,10,6000,92,'2021-04-30'),(91,10,8500,93,'2021-04-30'),(92,10,2000,94,'2021-04-30'),(93,0,2900,1,'2021-05-05');
/*!40000 ALTER TABLE `product_inflow` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_owner`
--

DROP TABLE IF EXISTS `product_owner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_owner` (
  `product_product_id` int NOT NULL,
  `owner_owner_id` int NOT NULL,
  `date` date DEFAULT NULL,
  PRIMARY KEY (`product_product_id`,`owner_owner_id`),
  KEY `owner_id_idx` (`owner_owner_id`),
  CONSTRAINT `idx2_product_product_id2` FOREIGN KEY (`product_product_id`) REFERENCES `product` (`product_id`),
  CONSTRAINT `owner_id` FOREIGN KEY (`owner_owner_id`) REFERENCES `owner` (`owner_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_owner`
--

LOCK TABLES `product_owner` WRITE;
/*!40000 ALTER TABLE `product_owner` DISABLE KEYS */;
INSERT INTO `product_owner` VALUES (1,1,'2021-04-29'),(2,1,'2021-04-29'),(3,1,'2021-04-29'),(4,1,'2021-04-29'),(5,1,'2021-04-29'),(6,1,'2021-04-29'),(7,1,'2021-04-29'),(8,1,'2021-04-29'),(9,1,'2021-04-29'),(10,1,'2021-04-29'),(11,1,'2021-04-29'),(12,1,'2021-04-29'),(13,1,'2021-04-29'),(14,1,'2021-04-29'),(15,1,'2021-04-29'),(16,1,'2021-04-29'),(17,1,'2021-04-29'),(18,1,'2021-04-29'),(19,1,'2021-04-29'),(20,1,'2021-04-29'),(23,1,'2021-04-29'),(24,1,'2021-04-29'),(25,1,'2021-04-29'),(26,1,'2021-04-29'),(27,1,'2021-04-29'),(28,1,'2021-04-29'),(29,1,'2021-04-29'),(30,1,'2021-04-29'),(31,1,'2021-04-29'),(32,1,'2021-04-29'),(33,1,'2021-04-29'),(34,1,'2021-04-29'),(35,1,'2021-04-29'),(36,1,'2021-04-29'),(37,1,'2021-04-29'),(38,1,'2021-04-29'),(39,1,'2021-04-30'),(40,1,'2021-04-30'),(41,1,'2021-04-30'),(42,1,'2021-04-30'),(43,1,'2021-04-30'),(44,1,'2021-04-30'),(45,1,'2021-04-30'),(46,1,'2021-04-30'),(47,1,'2021-04-30'),(48,1,'2021-04-30'),(49,1,'2021-04-30'),(50,1,'2021-04-30'),(51,1,'2021-04-30'),(52,1,'2021-04-30'),(53,1,'2021-04-30'),(54,1,'2021-04-30'),(55,1,'2021-04-30'),(56,1,'2021-04-30'),(57,1,'2021-04-30'),(58,1,'2021-04-30'),(59,1,'2021-04-30'),(60,1,'2021-04-30'),(61,1,'2021-04-30'),(62,1,'2021-04-30'),(63,1,'2021-04-30'),(64,1,'2021-04-30'),(65,1,'2021-04-30'),(66,1,'2021-04-30'),(67,1,'2021-04-30'),(68,1,'2021-04-30'),(69,1,'2021-04-30'),(70,1,'2021-04-30'),(71,1,'2021-04-30'),(72,1,'2021-04-30'),(73,1,'2021-04-30'),(74,1,'2021-04-30'),(75,1,'2021-04-30'),(76,1,'2021-04-30'),(77,1,'2021-04-30'),(78,1,'2021-04-30'),(79,1,'2021-04-30'),(80,1,'2021-04-30'),(81,1,'2021-04-30'),(82,1,'2021-04-30'),(83,1,'2021-04-30'),(84,1,'2021-04-30'),(85,1,'2021-04-30'),(86,1,'2021-04-30'),(87,1,'2021-04-30'),(88,1,'2021-04-30'),(89,1,'2021-04-30'),(90,1,'2021-04-30'),(91,1,'2021-04-30'),(92,1,'2021-04-30'),(93,1,'2021-04-30'),(94,1,'2021-04-30');
/*!40000 ALTER TABLE `product_owner` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_storge_date`
--

DROP TABLE IF EXISTS `product_storge_date`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_storge_date` (
  `storge_date_no` int NOT NULL AUTO_INCREMENT,
  `product_product_id` int NOT NULL,
  `storge_date` date DEFAULT NULL,
  PRIMARY KEY (`storge_date_no`,`product_product_id`),
  KEY `product_id3_idx` (`product_product_id`),
  CONSTRAINT `product_id3` FOREIGN KEY (`product_product_id`) REFERENCES `product` (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=93 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_storge_date`
--

LOCK TABLES `product_storge_date` WRITE;
/*!40000 ALTER TABLE `product_storge_date` DISABLE KEYS */;
INSERT INTO `product_storge_date` VALUES (1,1,'2021-04-29'),(2,2,'2021-04-29'),(3,3,'2021-04-29'),(4,4,'2021-04-29'),(5,5,'2021-04-29'),(6,6,'2021-04-29'),(7,7,'2021-04-29'),(8,8,'2021-04-29'),(9,9,'2021-04-29'),(10,10,'2021-04-29'),(11,11,'2021-04-29'),(12,12,'2021-04-29'),(13,13,'2021-04-29'),(14,14,'2021-04-29'),(15,15,'2021-04-29'),(16,16,'2021-04-29'),(17,17,'2021-04-29'),(18,18,'2021-04-29'),(19,19,'2021-04-29'),(20,20,'2021-04-29'),(21,23,'2021-04-29'),(22,24,'2021-04-29'),(23,25,'2021-04-29'),(24,26,'2021-04-29'),(25,27,'2021-04-29'),(26,28,'2021-04-29'),(27,29,'2021-04-29'),(28,30,'2021-04-29'),(29,31,'2021-04-29'),(30,32,'2021-04-29'),(31,33,'2021-04-29'),(32,34,'2021-04-29'),(33,35,'2021-04-29'),(34,36,'2021-04-29'),(35,37,'2021-04-29'),(36,38,'2021-04-29'),(37,39,'2021-04-30'),(38,40,'2021-04-30'),(39,41,'2021-04-30'),(40,42,'2021-04-30'),(41,43,'2021-04-30'),(42,44,'2021-04-30'),(43,45,'2021-04-30'),(44,46,'2021-04-30'),(45,47,'2021-04-30'),(46,48,'2021-04-30'),(47,49,'2021-04-30'),(48,50,'2021-04-30'),(49,51,'2021-04-30'),(50,52,'2021-04-30'),(51,53,'2021-04-30'),(52,54,'2021-04-30'),(53,55,'2021-04-30'),(54,56,'2021-04-30'),(55,57,'2021-04-30'),(56,58,'2021-04-30'),(57,59,'2021-04-30'),(58,60,'2021-04-30'),(59,61,'2021-04-30'),(60,62,'2021-04-30'),(61,63,'2021-04-30'),(62,64,'2021-04-30'),(63,65,'2021-04-30'),(64,66,'2021-04-30'),(65,67,'2021-04-30'),(66,68,'2021-04-30'),(67,69,'2021-04-30'),(68,70,'2021-04-30'),(69,71,'2021-04-30'),(70,72,'2021-04-30'),(71,73,'2021-04-30'),(72,74,'2021-04-30'),(73,75,'2021-04-30'),(74,76,'2021-04-30'),(75,77,'2021-04-30'),(76,78,'2021-04-30'),(77,79,'2021-04-30'),(78,80,'2021-04-30'),(79,81,'2021-04-30'),(80,82,'2021-04-30'),(81,83,'2021-04-30'),(82,84,'2021-04-30'),(83,85,'2021-04-30'),(84,86,'2021-04-30'),(85,87,'2021-04-30'),(86,88,'2021-04-30'),(87,89,'2021-04-30'),(88,90,'2021-04-30'),(89,91,'2021-04-30'),(90,92,'2021-04-30'),(91,93,'2021-04-30'),(92,94,'2021-04-30');
/*!40000 ALTER TABLE `product_storge_date` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_type`
--

DROP TABLE IF EXISTS `product_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_type` (
  `type_id` int NOT NULL AUTO_INCREMENT,
  `type_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `other_spec` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `price` float DEFAULT NULL,
  `amount_product` int DEFAULT NULL,
  `brand` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `product_product_id` int NOT NULL,
  `image` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`type_id`,`product_product_id`),
  KEY `product4_idx` (`product_product_id`),
  CONSTRAINT `product4` FOREIGN KEY (`product_product_id`) REFERENCES `product` (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=93 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_type`
--

LOCK TABLES `product_type` WRITE;
/*!40000 ALTER TABLE `product_type` DISABLE KEYS */;
INSERT INTO `product_type` VALUES (1,'ปรี','ตัวขยายสัญญาณลำโพงให้ดังขึ้นได้หลายย่านความถี่',2900,3,'Parametric EQ',1,'[\\uploads\\myImage-1619708197543.jpg,\\uploads\\myImage-1619708197549.jpg,\\uploads\\myImage-1619708197555.jpg,\\uploads\\myImage-1619708197557.jpg,\\uploads\\myImage-1619708197560.jpg,\\uploads\\myImage-1619708197563.jpg]'),(2,'ปรี','ตัวขยายสัญญาณลำโพงให้ดังขึ้นได้หลายย่านความถี่limited edition',2500,11,'Parametric EQ',2,'[\\uploads\\myImage-1619708434013.jpg,\\uploads\\myImage-1619708434015.jpg,\\uploads\\myImage-1619708434017.jpg,\\uploads\\myImage-1619708434022.jpg,\\uploads\\myImage-1619708434025.jpg]'),(3,'4นิ้ว','ลำโพงขนาด4นิ้ว100w',950,3,'fokke',3,'[\\uploads\\myImage-1619708653722.jpg,\\uploads\\myImage-1619708653725.jpg,\\uploads\\myImage-1619708653728.jpg]'),(4,'6.5 นิ้ว','ลำโพงขนาด6.5นิ้ว200w',1600,4,'fokker',4,'[\\uploads\\myImage-1619708755226.jpg,\\uploads\\myImage-1619708755229.jpg,\\uploads\\myImage-1619708755233.jpg]'),(5,'6.5นิ้ว','ลำโพงขนาด6.5นิ้ว200w',1800,3,'bostwick',5,'[\\uploads\\myImage-1619708866657.jpg,\\uploads\\myImage-1619708866660.jpg,\\uploads\\myImage-1619708866666.jpg]'),(6,'เสียงกลาง','ลำโพงเสียงกลางขนาด6.5นิ้ว250w',800,0,'midrange',6,'[\\uploads\\myImage-1619709047910.jpg,\\uploads\\myImage-1619709047912.jpg]'),(7,'12 นิ้ว','ลำโพงซัพขนาด6.5นิ้ว250w',3900,4,'element',7,'[\\uploads\\myImage-1619709158193.jpg,\\uploads\\myImage-1619709158197.jpg,\\uploads\\myImage-1619709158203.jpg]'),(8,'twitter','ลำโพงเสียงแหลมขนา25mm150w',650,0,'HIFINE',8,'[\\uploads\\myImage-1619709344233.jpg,\\uploads\\myImage-1619709344236.jpg,\\uploads\\myImage-1619709344239.jpg,\\uploads\\myImage-1619709344240.jpg]'),(9,'sub box','sub box 13×7 นิ้ว 120',3600,3,'-',9,'[\\uploads\\myImage-1619709506343.jpg,\\uploads\\myImage-1619709506345.jpg,\\uploads\\myImage-1619709506348.jpg]'),(10,'sub box','sub box 13×7 นิ้ว class-D',3800,5,'PLATINUM',10,'[\\uploads\\myImage-1619709699350.jpg,\\uploads\\myImage-1619709699351.jpg,\\uploads\\myImage-1619709699353.jpg]'),(11,'power','power class-D 4chanal 4000w',3500,5,'PLATINUM',11,'[\\uploads\\myImage-1619710045471.jpg,\\uploads\\myImage-1619710045473.jpg]'),(12,'Power','power class-D 4chanal 4000w',4500,3,'HIFINE',12,'[\\uploads\\myImage-1619710451697.jpg,\\uploads\\myImage-1619710451704.jpg,\\uploads\\myImage-1619710451708.jpg]'),(13,'Power','power class-AB 4chanal 5000w',3000,5,'-',13,'[\\uploads\\myImage-1619710938017.jpg,\\uploads\\myImage-1619710938020.jpg,\\uploads\\myImage-1619710938025.jpg]'),(14,'6.5นิ้ว','ลำโพงเสียงกลางขนาด6.5นิ้ว250w',1800,0,'midrange',14,'[\\uploads\\myImage-1619711051735.jpg,\\uploads\\myImage-1619711051744.jpg,\\uploads\\myImage-1619711051746.jpg,\\uploads\\myImage-1619711051747.jpg]'),(15,'คาปาซิเตอร์ ','คาปาซิเตอร์ 1.5 ล้านไมโครฟารัด',1300,0,'fokker',15,'[\\uploads\\myImage-1619711133995.jpg,\\uploads\\myImage-1619711133998.jpg,\\uploads\\myImage-1619711134005.jpg]'),(16,'6x9นิ้ว ','ลำโพง6×9blaupunkt120w',2500,9,'blaupunkt',16,'[\\uploads\\myImage-1619711488103.jpg,\\uploads\\myImage-1619711488107.jpg,\\uploads\\myImage-1619711488110.jpg,\\uploads\\myImage-1619711488111.jpg]'),(17,'สัญญาณกันขโมย','สัญญาณกันขโมยaquator กุญแจtoyot',2800,5,'T.serios',17,'[\\uploads\\myImage-1619711677583.jpg,\\uploads\\myImage-1619711677584.jpg,\\uploads\\myImage-1619711677586.jpg]'),(18,'รีโมทเซ็นทรัลล็อค','รีโมทเซ็นทรัลล็อค',2800,8,'smarteye',18,'[\\uploads\\myImage-1619711799222.jpg,\\uploads\\myImage-1619711799225.jpg]'),(19,'สัญญาณกันขโมย','สัญญาณกันขโมยaquator',2500,-4,'T.serios',19,'[\\uploads\\myImage-1619711950356.jpg,\\uploads\\myImage-1619711950358.jpg,\\uploads\\myImage-1619711950361.jpg]'),(20,'เซ็นเซอร์ถอยหลัง','เซ็นเซอร์ถอยหลัง 2 จุด',1600,0,'PLATINUM',20,'[\\uploads\\myImage-1619712071992.jpg,\\uploads\\myImage-1619712071994.jpg]'),(21,'เซ็นเซอร์ถอยหลัง','เซ็นเซอร์ถอยหลัง 4 จุด',2300,3,'ZEUS',23,'[\\uploads\\myImage-1619712212149.jpg,\\uploads\\myImage-1619712212155.jpg,\\uploads\\myImage-1619712212158.jpg]'),(22,'กล้องถอยหลัง','กล้องถอยหลัง1จุด',1200,4,'HD',24,'[\\uploads\\กล้องถอยหลัง-1619712635581.jpg,\\uploads\\กล้องถอยหลัง-1619712635584.jpg]'),(23,'กล้องบันทึกหน้า','กล้องบันทึกหน้า wifi FULL HD 1080P',3900,1,'TECH EYE',25,'[\\uploads\\MG2-1619712771104.jpg,\\uploads\\MG2-1619712771106.jpg]'),(24,'กล้องบันทึกหน้าหลัง','กล้องบันทึกหน้าหลัง2kdigital4.0HD audio',3500,4,'NEPTUNE',26,'[\\uploads\\กล้องบันทึกหน้าหลัง2k-1619712930644.jpg,\\uploads\\กล้องบันทึกหน้าหลัง2k-1619712930646.jpg,\\uploads\\กล้องบันทึกหน้าหลัง2k-1619712930649.jpg]'),(25,'กล้องบันทึกครอบกระจกหน้า','กล้องบันทึกครอบกระจกหน้าหลัง 5นิ้วzeus',3800,4,'ZEUS',27,'[\\uploads\\กล้องบันทึกครอบกระจกหน้าหลัง-1619713065941.jpg,\\uploads\\กล้องบันทึกครอบกระจกหน้าหลัง-1619713065943.jpg,\\uploads\\กล้องบันทึกครอบกระจกหน้าหลัง-1619713065944.jpg,\\uploads\\กล้องบันทึกครอบกระจกหน้าหลัง-1619713065946.jpg]'),(26,'กล้องบันทึกครอบกระจกหน้า','กล้องบันทึกครอบกระจกหน้าหลังFULL HD',2500,6,'smarteye',28,'[\\uploads\\DVR-315-1619713269103.jpg,\\uploads\\DVR-315-1619713269104.jpg,\\uploads\\DVR-315-1619713269107.jpg,\\uploads\\DVR-315-1619713269110.jpg]'),(27,'2ดิน','วิทยุandroid10.1',6200,-3,'ZEUS',29,'[\\uploads\\ZS-916-1619713491098.jpg,\\uploads\\ZS-916-1619713491103.jpg,\\uploads\\ZS-916-1619713491104.jpg,\\uploads\\ZS-916-1619713491108.jpg,\\uploads\\ZS-916-1619713491111.jpg]'),(28,'ดินเดียว','วิทยุ1ดิน100Tใส่USBได้',1700,4,'blaupunkt',30,'[\\uploads\\HOKADIO-1619713619923.jpg,\\uploads\\HOKADIO-1619713619931.jpg,\\uploads\\HOKADIO-1619713619934.jpg,\\uploads\\HOKADIO-1619713619937.jpg]'),(29,'2ดิน','วิทยุandroid10',5900,4,' m master',31,'[\\uploads\\AD-10U-1619713727500.jpg,\\uploads\\AD-10U-1619713727509.jpg,\\uploads\\AD-10U-1619713727514.jpg,\\uploads\\AD-10U-1619713727518.jpg,\\uploads\\AD-10U-1619713727526.jpg]'),(30,'2ดิน','วิทยุandroid10',4000,4,'ZEUS',32,'[\\uploads\\ZS-7011-1619713865672.jpg,\\uploads\\ZS-7011-1619713865674.jpg,\\uploads\\ZS-7011-1619713865676.jpg,\\uploads\\ZS-7011-1619713865678.jpg]'),(31,'2ดิน','จอ android สำหรับ toyota ram 2 rom',4700,2,'mirrorlink',33,'[\\uploads\\A7P522-1619714100541.jpg,\\uploads\\A7P522-1619714100551.jpg,\\uploads\\A7P522-1619714100553.jpg,\\uploads\\A7P522-1619714100557.jpg,\\uploads\\A7P522-1619714100559.jpg]'),(32,'2ดิน','วิทยุandroid10',4900,1,'ZEUS',34,'[\\uploads\\ZS-7012-1619714233087.jpg,\\uploads\\ZS-7012-1619714233089.jpg,\\uploads\\ZS-7012-1619714233091.jpg,\\uploads\\ZS-7012-1619714233093.jpg]'),(33,'ดินเดียว','วิทยุ JVC 1din จอ 3 นิ้ว bluetooth',5500,4,'JVC',35,'[\\uploads\\KD-AVX11-1619714378475.jpg,\\uploads\\KD-AVX11-1619714378477.jpg,\\uploads\\KD-AVX11-1619714378479.jpg,\\uploads\\KD-AVX11-1619714378480.jpg]'),(34,'twitter','ทวิตเตอร์เหลี่ยมbostwick',2900,1,'bostwick',36,'[\\uploads\\T-RB1-1619714531039.jpg,\\uploads\\T-RB1-1619714531041.jpg]'),(35,'ดินเดียว','วิทยุ 1 din เล่นแผ่น bluetooth',2500,-2,'blaupunkt',37,'[\\uploads\\ิBARCELONA-1619714708256.jpg,\\uploads\\ิBARCELONA-1619714708259.jpg]'),(36,'ดินเดียว','วิทยุ 1 din JVC',3500,4,'JVC',38,'[\\uploads\\KD-T408-1619714780677.jpg]'),(37,'%','-',1700,0,'ALASKA',39,'[\\uploads\\ALASKA(กระบะ)-1619717714567.jpg]'),(38,'%','-',1900,10,'ALASKA',40,'[\\uploads\\ALASKA(กระบะแค็ป)-1619717885282.jpg]'),(39,'%','-',2200,10,'ALASKA',41,'[\\uploads\\ALASKA(กระบะ4ประตู)-1619717909867.jpg]'),(40,'%','-',2500,10,'ALASKA',42,'[\\uploads\\ALASKA(เก๋งเล็กยกเว้นHONDAเก๋งใหญื)-1619717927880.jpg]'),(41,'%','-',2800,10,'ALASKA',43,'[\\uploads\\ALASKA(เก๋งใหญ์)-1619718072478.jpg]'),(42,'%','-',3200,10,'ALASKA',44,'[\\uploads\\ALASKA(SUV)-1619718105692.jpg]'),(43,'%','-',4300,10,'ALASKA',45,'[\\uploads\\ALASKA(รถตู้)-1619718122460.jpg]'),(44,'%','-',1000,1,'ALASKA',46,'[\\uploads\\ALASKA(บาานหน้า)-1619718146145.jpg]'),(45,'ปรอท','-',2000,9,'ALASKA',47,'[\\uploads\\ALASKAปรอท(กระบะ)-1619718194474.jpg]'),(46,'ปรอท','-',2300,10,'ALASKA',48,'[\\uploads\\ALASKAปรอท(กระบะแค๊ป)-1619718219781.jpg]'),(47,'ปรอท','-',2500,10,'ALASKA',49,'[\\uploads\\ALASKAปรอท(กระบะ4ประตู)-1619718305137.jpg]'),(48,'ปรอท','-',3000,10,'ALASKA',50,'[\\uploads\\ALASKAปรอท(เก๋งเล็กยกเว้นHONDA=เก๋งใหญ่)-1619718320563.jpg]'),(49,'ปรอท','-',3500,10,'ALASKA',51,'[\\uploads\\ALASKAปรอท(เก๋งใหญ์)-1619718408153.jpg]'),(50,'ปรอท','-',4000,10,'ALASKA',52,'[\\uploads\\ALASKAปรอท(SUV)-1619718426488.jpg]'),(51,'ปรอท','-',4800,10,'ALASKA',53,'[\\uploads\\ALASKAปรอท(รถตู้)-1619718441688.jpg]'),(52,'ปรอท','-',1200,3,'ALASKA',54,'[\\uploads\\ALASKAปรอท(บานหน้า)-1619718458806.jpg]'),(53,'CERAMIC','-',3000,10,'ALASKA',55,'[\\uploads\\ALASKA CERAMIC(กระบะ)-1619718510257.jpg]'),(54,'CERAMIC','-',3500,10,'ALASKA',56,'[\\uploads\\ALASKA CERAMIC(กระบะแค๊ป)-1619718549033.jpg]'),(55,'CERAMIC','-',3900,10,'ALASKA',57,'[\\uploads\\ALASKA CERAMIC(กระบะ4ประตู)-1619718588853.jpg]'),(56,'CERAMIC','-',4500,10,'ALASKA',58,'[\\uploads\\ALASKA CERAMIC(เก๋งเล็กยกเว้นHONDA=เก๋งใหญ่)-1619718609606.jpg]'),(57,'CERAMIC','-',4800,10,'ALASKA',59,'[\\uploads\\ALASKA CERAMIC(เก๋งใหญ่)-1619718706955.jpg]'),(58,'CERAMIC','-',5000,10,'ALASKA',60,'[\\uploads\\ALASKA CERAMIC(SUV)-1619718743942.jpg]'),(59,'CERAMIC','-',6500,10,'ALASKA',61,'[\\uploads\\ALASKA CERAMIC(รถตู้)-1619718757252.jpg]'),(60,'CERAMIC','-',1600,9,'ALASKA',62,'[\\uploads\\ALASKA CERAMIC(บานหน้า)-1619718779341.jpg]'),(61,'BLACK ICE','-',3500,10,'LEGEND',63,'[\\uploads\\LEGEND BLACK ICE(กระบะ)-1619719019515.jpg]'),(62,'BLACK ICE','-',3800,10,'LEGEND',64,'[\\uploads\\LEGEND BLACK ICE(กระบะแค๊ป)-1619719045433.jpg]'),(63,'BLACK ICE','-',4200,10,'LEGEND',65,'[\\uploads\\LEGEND BLACK ICE(กระบะ4ประตู)-1619719115718.jpg]'),(64,'BLACK ICE','-',4700,10,'LEGEND',66,'[\\uploads\\LEGEND BLACK ICE(เก๋งเล็กยกเว้นHONDA=เก๋งใหญ่)-1619719129525.jpg]'),(65,'BLACK ICE','-',5000,10,'LEGEND',67,'[\\uploads\\LEGEND BLACK ICE(เก๋งใหญ่)-1619719140705.jpg]'),(66,'BLACK ICE','-',5500,10,'LEGEND',68,'[\\uploads\\LEGEND BLACK ICE(SUV)-1619719152951.jpg]'),(67,'BLACK ICE','-',7000,10,'LEGEND',69,'[\\uploads\\LEGEND BLACK ICE(รถตู้)-1619719163574.jpg]'),(68,'BLACK ICE','-',1800,3,'LEGEND',70,'[\\uploads\\LEGEND BLACK ICE(บานหน้า)-1619719174533.jpg]'),(69,'EXP','-',4000,10,'LEGEND',71,'[\\uploads\\LEGEND EXP(กระบะ)-1619719192176.jpg]'),(70,'EXP','-',4500,10,'LEGEND',72,'[\\uploads\\LEGEND EXP(กระบะแค๊ป)-1619719200642.jpg]'),(71,'EXP','-',5300,10,'LEGEND',73,'[\\uploads\\LEGEND EXP(กระบะ4ประตู)-1619719208885.jpg]'),(72,'EXP','-',5800,10,'LEGEND',74,'[\\uploads\\LEGEND EXP(เก๋งเล็กยกเว้นHONDA=เก๋งใหญ่)-1619719221153.jpg]'),(73,'EXP','-',6500,10,'LEGEND',75,'[\\uploads\\LEGEND EXP(เก๋งใหญ่)-1619719232809.jpg]'),(74,'EXP','-',7000,10,'LEGEND',76,'[\\uploads\\LEGEND EXP(SUV)-1619719242524.jpg]'),(75,'EXP','-',9500,10,'LEGEND',77,'[\\uploads\\LEGEND EXP(รถตู้)-1619719251630.jpg]'),(76,'EXP','-',2500,10,'LEGEND',78,'[\\uploads\\LEGEND EXP(บานหน้า)-1619719261453.jpg]'),(77,'50%-60%','-',3500,10,'LAMINA',79,'[\\uploads\\LAMINA 50-60(กระบะ)-1619719302785.jpg]'),(78,'50%-60%','-',3800,10,'LAMINA',80,'[\\uploads\\LAMINA 50-60(กระบะแค๊ป)-1619719312616.jpg]'),(79,'50%-60%','-',4000,10,'LAMINA',81,'[\\uploads\\LAMINA 50-60(กระบะ4ประตู)-1619719323123.jpg]'),(80,'50%-60%','-',4500,10,'LAMINA',82,'[\\uploads\\LAMINA 50-60(เก๋งเล็กยกเว้นHONDA=เก๋งใหญ่)-1619719333374.jpg]'),(81,'50%-60%','-',4800,10,'LAMINA',83,'[\\uploads\\LAMINA 50-60(เก๋งใหญ่)-1619719343486.jpg]'),(82,'50%-60%','-',5500,10,'LAMINA',84,'[\\uploads\\LAMINA 50-60(SUV)-1619719355337.jpg]'),(83,'50%-60%','-',7500,10,'LAMINA',85,'[\\uploads\\LAMINA 50-60(รถตู้)-1619719361875.jpg]'),(84,'50%-60%','-',1800,7,'LAMINA',86,'[\\uploads\\LAMINA 50-60(บานหน้า)-1619719370402.jpg]'),(85,'80%','-',3700,10,'LAMINA',87,'[\\uploads\\LAMINA 80(กระบะ)-1619719387971.jpg]'),(86,'80%','-',4000,10,'LAMINA',88,'[\\uploads\\LAMINA 80(กระบะแค๊ป)-1619719398264.jpg]'),(87,'80%','-',4500,10,'LAMINA',89,'[\\uploads\\LAMINA 80(กระบะ4ประตู)-1619719407287.jpg]'),(88,'80%','-',4800,10,'LAMINA',90,'[\\uploads\\LAMINA 80(เก๋งเล็กยกเว้นHONDA=เก๋งใหญ่)-1619719416121.jpg]'),(89,'80%','-',5300,10,'LAMINA',91,'[\\uploads\\LAMINA 80(เก๋งใหญ่)-1619719425996.jpg]'),(90,'80%','-',6000,10,'LAMINA',92,'[\\uploads\\LAMINA 80(SUV)-1619719434660.jpg]'),(91,'80%','-',8500,10,'LAMINA',93,'[\\uploads\\LAMINA 80(รถตู้)-1619719442358.jpg]'),(92,'80%','-',2000,9,'LAMINA',94,'[\\uploads\\LAMINA 80(บานหน้า)-1619719452821.jpg]');
/*!40000 ALTER TABLE `product_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tokens`
--

DROP TABLE IF EXISTS `tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tokens` (
  `token_id` int unsigned NOT NULL AUTO_INCREMENT,
  `token` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`token_id`),
  UNIQUE KEY `token_UNIQUE` (`token`),
  KEY `user_id_fk` (`user_id`),
  CONSTRAINT `token_FK` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tokens`
--

LOCK TABLES `tokens` WRITE;
/*!40000 ALTER TABLE `tokens` DISABLE KEYS */;
INSERT INTO `tokens` VALUES (3,'ru1-U/34KPfy#1p#FD6k7eq3MKYrUg29nLjAWBudCfTuk@7j/UuacgcPjRzvJ*p9/zmfp/gcyYjF/*YabSK4Fp!2@UWRE=zQ6aUl',17),(4,'Dw/6bPd4JP5uK9n$nt0I-M5Ux^rWsEnxMb4LqqlW*Jz@WwPgYC7*/FTY7UDmXSX-SR!HTKslH1bVRSU*i9DK7tXXI1w6g&KM79-A',18);
/*!40000 ALTER TABLE `tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `user_status` enum('customer','owner') CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT 'customer',
  `user_fname` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `user_lname` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `user_phone` char(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `user_image` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  KEY `idx_account_user_user_id` (`user_id`),
  KEY `idx2_user_user_id` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'customer','Jorn','snow','0608894533','\\uploads\\1.jpg'),(2,'customer','kaimook','cmcafe','0668942358','\\uploads\\2.jpg'),(3,'owner','nattapon','tanee','0655894235','\\uploads\\3.jpg'),(4,'customer','rinee','sapthaweekarn','0975423590','\\uploads\\4.jpg'),(5,'customer','too','sapthaweekarn','0985651235','\\uploads\\5.jpg'),(6,'customer','mook','mik','0953215684','\\uploads\\6.jpg'),(7,'owner','champ','wow','0688952355','\\uploads\\7.jpg'),(8,'customer','rena','harn','0698531258','\\uploads\\8.jpg'),(9,'customer','fluke','jirayu','0698564895','\\uploads\\9.jpg'),(10,'customer','anna','loca','0682359535','\\uploads\\10.jpg'),(11,'customer','Pook','thongjid','0689852369','\\uploads\\11.jpg'),(12,'customer','non','natchanon','0698223595','\\uploads\\12.jpg'),(13,'customer','bank','dokkathin','0915560109','\\uploads\\13.jpg'),(14,'customer','pingkai','naitamnan','0689523905','\\uploads\\14.jpg'),(15,'customer','jeab','leabduan','0895662235','\\uploads\\15.jpg'),(16,'customer','Bil','Gates','0999999999','\\uploads\\16.jpg'),(17,'customer','Jirayuth','Dokkathin','0562156215','\\uploads\\9.jpg'),(18,'customer','JJJJJJJJJJJJJJJJJJJJJJJ','DDDDDDDDDDDDD','0905555555','\\uploads\\myImage-1620285004299.jpg');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-05-07  2:23:57
