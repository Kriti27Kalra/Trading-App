-- MySQL dump 10.13  Distrib 8.0.41, for Win64 (x86_64)
--
-- Host: localhost    Database: trading_db
-- ------------------------------------------------------
-- Server version	8.0.41

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
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (1,'admin@example.com','admin123');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `userId` varchar(20) DEFAULT NULL,
  `referred_by_code` varchar(20) DEFAULT NULL,
  `refer_code` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'kr','kalra','k@gmail.com','90','2025-05-07 09:58:38','2025-05-23 12:49:33',NULL,NULL,'USER1'),(2,'joh','do','joo@gmail.com','90','2025-05-07 10:09:56','2025-05-23 12:49:33',NULL,NULL,'USER2'),(3,'jom','o','j1@gmail.com','89','2025-05-07 10:11:07','2025-05-23 12:49:33',NULL,NULL,'USER3'),(4,'jo','j','jk@gmail.com','90','2025-05-07 10:18:33','2025-05-23 12:49:33',NULL,NULL,'USER4'),(5,'k','jj','kk@gmail.com','00','2025-05-07 10:23:36','2025-05-23 12:49:33',NULL,NULL,'USER5'),(6,'john','j','jj@gmail.com','00','2025-05-07 11:30:53','2025-05-23 12:49:33',NULL,NULL,'USER6'),(7,'kriti','k','kt@gmail.com','90','2025-05-08 08:51:26','2025-05-23 12:49:33',NULL,NULL,'USER7'),(8,'john ','doe','jn@gmail.com','99','2025-05-08 10:17:46','2025-05-23 12:49:33',NULL,NULL,'USER8'),(10,'gg','hh','gh@gmail.com','00','2025-05-08 13:07:05','2025-05-23 12:49:33',NULL,NULL,'USER10'),(11,'la','k','la@gmail.com','00','2025-05-09 08:45:31','2025-05-23 12:49:33',NULL,NULL,'USER11'),(12,'hh','hh','hh@gmail.com','$2b$10$b1AnGyofcjon8OOguphlrecuAs4oy9V6pRlYDua8gSWkVRg07H6GS','2025-05-10 06:56:58','2025-05-23 12:49:33',NULL,NULL,'USER12'),(13,'kkkk','l','kkkk@gmail.com','$2b$10$Ets6lo9dv4xOLf0kEHsSC.6wJmsplJUdoLR6YJxc3ZVF09qapeJGi','2025-05-10 06:58:36','2025-05-23 12:49:33',NULL,NULL,'USER13'),(14,'ll','ll','kk8@gmail.com','$2b$10$G8gUgPLXTzwVS40QfY18CuHArezIlbe6lKS6Cfid6IQQYM..Y3tNC','2025-05-10 07:06:23','2025-05-23 12:49:33',NULL,NULL,'USER14'),(15,'kkk','l','kk88@gmail.com','$2b$10$H0k098y2CRc9dvFQ5lOfcOh6a0/fyTaLtnX67j/FVjbpSwiojyrn6','2025-05-10 07:09:28','2025-05-23 12:49:33',NULL,NULL,'USER15'),(16,'jj','hh','jh@gmail.com','$2b$10$3d.V7tuSUsuuob5gSVsPzua.6PLwbomwquN0EBTl.ie.7qBT4c0ZW','2025-05-10 13:03:36','2025-05-23 12:49:33',NULL,NULL,'USER16'),(17,'oo','oo','oo@gmail.com','$2b$10$WmAMdt0SErGKLeWka4TDsesCf1R1Ltv6XHQJNQoMkza916cV2wn5O','2025-05-12 07:59:10','2025-05-23 12:49:33',NULL,NULL,'USER17'),(18,'pp','pp','pp@gmail.com','$2b$10$B6Iq6.ztuZ6dinxKMYgp2O7WC4Q3WcqHy9traoILvfUXxioKPyZSO','2025-05-12 08:05:04','2025-05-23 12:49:33',NULL,NULL,'USER18'),(19,'jj','mm','jj2@gmail.com','$2b$10$W7sdZaGKNdUKVc7MAbapbOl/G7cDmKKdEXipKCjrci1VrfC3RE8X.','2025-05-13 11:31:34','2025-05-23 12:49:33',NULL,NULL,'USER19'),(20,'bb','bb','bb@gmail.com','$2b$10$ofpvWBQZNjeVpcCIsNp3YecXXSn7bHI7kl46kYQcjwKAvzq6.TOse','2025-05-13 13:39:57','2025-05-23 12:49:33',NULL,NULL,'USER20'),(21,'jj','ll','jl@gmail.com','$2b$10$X/NFOu8i3Dso90I7kWHUP.z5j7NPj4vD9yOt2rJ4wDde/8erCYtIm','2025-05-14 04:54:28','2025-05-23 12:49:33',NULL,NULL,'USER21'),(22,'jj','nn','jn1@gmail.com','$2b$10$OJHXZzRuA4Y9KXHSJoIIpuDQbB9tknktW7MEY0m9I.IYoAjztWBo2','2025-05-15 05:58:01','2025-05-23 12:49:33',NULL,NULL,'USER22'),(23,'dee','t','dee@gmail.com','77','2025-05-16 10:47:03','2025-05-23 12:49:33',NULL,NULL,'USER23'),(24,'jj','bb','jb@gmail.com','$2b$10$k1FPdhaoNzyM7eIiO64TNuHYpgolwDn8fKD1jLZEcEOsBjbx1L4am','2025-05-17 12:56:07','2025-05-23 12:49:33',NULL,NULL,'USER24'),(25,'gg','nn','gn@gmail.com','$2b$10$x0lkUTFSM3uecwabNqlU.e5OUMVDeKOWoGGn5esZ9rSTTBfk4mMC6','2025-05-19 07:02:21','2025-05-23 12:49:33',NULL,NULL,'USER25'),(26,'hg','hg','hghg@gmail.com','$2b$10$PiqKhF9QavwYm6yz3GSoxOt0R5fwAGy.XUgdyoTjD7jBgXLqTshMW','2025-05-19 10:51:31','2025-05-23 12:49:33',NULL,NULL,'USER26'),(27,'ff','ss','fs@gmail.com','$2b$10$/vGkJsgyKLueYoMf2wLccOEuKwnrDUl5iKRtYoyyKiYfrY6tgsHma','2025-05-20 11:28:20','2025-05-23 12:49:33',NULL,NULL,'USER27'),(28,'Alice','Wills','alice@example.com','89','2025-05-23 11:01:18','2025-05-23 12:49:33',NULL,NULL,'USER28'),(29,'john','boston','jb@example.com','78','2025-05-23 11:01:18','2025-05-23 12:49:33',NULL,NULL,'USER29'),(30,'john','dor','dor@gmail.com','$2b$10$/e2ZVeAB9U7WziJJOyYlx.jUpriyzz90f6F3w4X40U.bK5dokI6xa','2025-05-23 11:13:19','2025-05-23 12:49:33',NULL,NULL,'USER30'),(31,'jamm','k','jamm@gmail.com','$2b$10$meiIM46p6icM7oa5JueEyO9/5Y7f/0PvYVJfV1CC0h8vdmb3Vv3jS','2025-05-23 12:19:20','2025-05-23 13:33:45','1234',NULL,'USER31'),(32,'gary','f','gary@gmail.com','$2b$10$kDpcQubCR3QmFZsI32wBwORgJ4nIl5vAe8B0yucrZ7Hlb84nlhzMe','2025-05-23 12:37:53','2025-05-23 12:49:33',NULL,NULL,'USER32'),(33,'har','ry','har@gmail.com','$2b$10$jaSD78H3VXXXId82KuTeduhT0Qi5Z/2eKPS4NNvavqv12sFu3Cbvu','2025-05-23 12:50:28','2025-05-23 12:50:28',NULL,'USER4','USER7404'),(34,'kkk','kkk','kkk8k@gmail.com','$2b$10$Vo2hpdPU262uBwEOpeq3zewalniFE0WFRKsQXdaeobYI0JzuMLSnm','2025-05-23 13:10:21','2025-05-23 13:10:21',NULL,'USER7404','USER5604');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-05-24 15:59:19
