-- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
--
-- Host: localhost    Database: i4i_cadastro
-- ------------------------------------------------------
-- Server version	8.0.25

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
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `address2` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `zip` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'admin@email.com','$2a$10$dgc7jGV3bf4E5.kB91MiBuBAXZCDA2k/hZERoRg8h1dRw/2mjfrC.','Administrador','Rua A, Nº 1','Ap. 01','Brasil','Santa Catarina',NULL,'2021-07-16 13:00:46','2021-07-16 13:00:46'),(4,'estagiario@email.com','$2a$10$Omh8nnZ868cUPzqdXnVA9.QJA7/wRa7dkjc/8oAvLujoLYZSXfo/.','Estagiario','Rua do Estagiario, Nº 02','Casa do Estagiario','Brasil','Santa Catarina',NULL,'2021-07-16 15:04:51','2021-07-16 15:04:51'),(5,'joao@emai.com','$2a$10$eEHjqYW9fRmFpbcIPPEP3u9XCy60xYmXplNuUt0hGxOMRsXaUfR3e','João','Rua Joao, Nº 15','','Brasil','Santa Catarina','938188823','2021-07-16 16:36:17','2021-07-16 16:36:17'),(6,'gui@email.com','$2a$10$gkKWSZYuSl4yufiCmZqTUOh6/qAWsLfuZSOjzbE3l3iDbfom8AMBm','Guilherme','Rua Guilherme, Nº 21','','Brasil','Santa Catarina','8900','2021-07-16 17:21:19','2021-07-16 17:21:19'),(7,'luizgamer@email.com','','Luiz','Rua Pedro Antonio','','Selecione...','Selecione...','378932173','2021-07-17 11:23:46','2021-07-17 11:38:39');
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

-- Dump completed on 2021-07-17 12:07:36
