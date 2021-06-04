create database db_hotel;
use db_hotel;
drop table rooms;
drop database db_hotel;
CREATE TABLE `hotel_location`(
   `id` int AUTO_INCREMENT PRIMARY KEY,
    location varchar(255) unique,
    `image` varchar(255)
    );
 INSERT INTO `hotel_location` (`location`,`image`) 
        VALUES ("Hanoi","/images/home/hanoi.jpg"),
               ("Saigon","/images/home/saigon.jpg"),
               ("Danang","/images/home/danang.jpg"),
               ("Hue","/images/home/hue.jpg"), 
               ("Hoian","/images/home/hoian.jpg");
CREATE TABLE `hotel` (
    `id` int AUTO_INCREMENT PRIMARY KEY,
    `hotel_name` varchar(255),
    `id_location` int,
    `image` text,
    FOREIGN KEY (`id_location`) REFERENCES `hotel_location`(`id`) on delete cascade on update cascade
    );

 INSERT INTO `hotel` (`hotel_name`,`id_location`) 
        VALUES ("Quang Trung Hotel",2),
               ("Lotus Center Hotel",1),
                ("Roseland Centa Hotel & Spa",3),
               ("Somerset Chancellor Court Serviced Residence",2),
              ("The Myst Dong Khoi",3),
              ("Mia Saigon - luxury boutique hotel",2);
              
CREATE TABLE IF NOT EXISTS `roomtypes` (
    `roomtype_id` INT(11) NOT NULL AUTO_INCREMENT,
    `roomtype` VARCHAR(255) NOT NULL,
    `rent` DECIMAL(10) NOT NULL,
    `quantity` INT(11) NOT NULL,
    `hotel_id` int(11) not null,
    PRIMARY KEY (`roomtype_id`),
    FOREIGN key (`hotel_id`) REFERENCES `hotel`(`id`) on delete cascade on update cascade
); 

INSERT INTO `roomtypes` (`roomtype`, `rent`, `quantity`,`hotel_id`) 
        VALUES ("Luxury", 590, 10,1),
               ("Family", 490, 10,2),
               ("Couple", 390, 10,3),
               ("Standard", 290, 10,5),
               ("King Room", 590, 10,1),
               ("Twin Room", 490, 10,2),
               ("Hollywood Twin Room", 390, 10,3),
               ("Studio Room", 290, 10,5),
               ("Suites", 290, 10,2);
 
CREATE TABLE IF NOT EXISTS `rooms` (
    `room_id` INT(11) NOT NULL AUTO_INCREMENT,
    `roomtype_id` INT(11) NOT NULL,
    `noroom` INT(11) NOT NULL,
    `img` VARCHAR(255) NOT NULL,
    `status` VARCHAR(255) NOT NULL,
    `phone` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`room_id`),
    FOREIGN KEY (`roomtype_id`) REFERENCES `roomtypes`(`roomtype_id`) on delete cascade on update cascade
);

CREATE TABLE IF NOT EXISTS `roomstatus` (
	`roomstatus_id` INT(11) NOT NULL AUTO_INCREMENT,
	`room_id` INT(11) NOT NULL,
	`arrive` DATE NOT NULL,
	`depart` DATE NOT NULL,
	PRIMARY KEY (`roomstatus_id`),
	FOREIGN KEY(room_id) REFERENCES `rooms`(room_id) on delete cascade on update cascade
);


INSERT INTO `rooms` (`roomtype_id`, `noroom`,`status`,`img`,  `phone`)
            VALUES (1, 501, "available","images/room/room10.jpg", 19005051),
                    (1, 502, "available","images/room/room1.jpg", 19085051),
                    (1, 503, "available","images/room/room2.jpg", 19505051),
                    (1, 504, "available","images/room/room3.jpg", 19006051),
                    (1, 505, "available","images/room/room4.jpg", 19005051),
                    (1, 506, "available","images/room/room5.jpg", 19005551),
                    (1, 507, "available","images/room/room6.jpg", 19003051),
                    (1, 508, "available","images/room/room7.jpg", 19025051),
                    (1, 509, "available","images/room/room8.jpg", 19095051),
                    (1, 510, "available","images/room/room9.jpg", 19015051),
                    (2, 401, "available","images/room/room10.jpg", 19008051),
                    (2, 402, "available","images/room/room11.jpg", 19405051),
                    (2, 403, "available","images/room/room12.jpg", 19905051),
                    (2, 403, "available","images/room/room13.jpg", 19905051);
CREATE TABLE IF NOT EXISTS `contacts` (
    `contact_id` INT(11) NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `subject` VARCHAR(255) NOT NULL,
    `content` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`contact_id`)
);

CREATE TABLE IF NOT EXISTS `users` (
    `user_id` INT(11) NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `code` mediumint(50) NOT NULL,
    `status` text NOT NULL, 
    `role` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`user_id`)
);


        INSERT INTO `users` (`name`, `email`, `password`, `status`, `role`) 
        VALUES ("admin", "admin@gmail.com", "admin", "verified", "admin"),
        ("Nguyễn Thị Thu Hà", "nguyenthithuha2911@gmail.com", "nguyenthithuha2911123456", "verified", "admin"),
        ("Nguyễn Thị Thu", "thuthi@gmail.com", "thuthi123456", "verified", "admin"),
		("Nguyễn Đình Long", "long.nguyen@student.passerellesnumeriques.org", "longnguyen123456", "verified", "admin"),
        ("Hồ Thị Hương Sen", "huongsen@gmail.com", "sen123456", "verified", "user"),
        ("Trần Thị Như Mai", "nhumai@gmail.com", "nhumai123456", "verified", "user"),
		("Trịnh Thị Thục Trưng", "trungtrinh@gmail.com", "trungtrinh134456", "verified", "user"),
		("Hồ Thị Như Quỳnh", "quynhho@gmail.com", "quynhho1243", "verified", "user"),
        ("Hương Sen", "huongsen34@gmail.com", "sen2456", "verified", "user"),
        ("Như Mai", "nhumai23@gmail.com", "nhumai123456", "verified", "user"),
		("Thục Trưng", "trungtrinh434@gmail.com", "trungtrinh123346", "verified", "user"),
		("Hồ Thị Như Quỳnh", "quynhho@gmail.com", "quynhho125445", "verified", "user"),
		("User", "user@gmail.com", "user123456", "verified", "user");

-- CREATE TABLE IF NOT EXISTS `payment` ()

CREATE TABLE IF NOT EXISTS `roombooks` (
    `roombook_id` INT(11) NOT NULL AUTO_INCREMENT,
    `user_id` INT(11) NOT NULL,
    `room_id` INT(11) NOT NULL,
    `phone` VARCHAR(255) NOT NULL,
    `arrive` DATE NOT NULL,
    `depart` DATE NOT NULL,
    `status` text NOT NULL,
    `payment` CHAR(10) NOT NULL,
    PRIMARY KEY (`roombook_id`),
    FOREIGN KEY(user_id) REFERENCES `users`(user_id) on delete cascade on update cascade,
    FOREIGN KEY(room_id) REFERENCES `rooms`(room_id) on delete cascade on update cascade
);

INSERT INTO `roombooks` (`user_id`, `room_id`, `phone`,  `arrive`, `depart`, `status`, `payment`)
        VALUES (1, 1, '0337965469', '2021/04/15', '2021/04/18', 'pending', 'unpaid'),
                (2,2, '0337978967', '2021/04/20', '2021/04/22', 'pending', 'unpaid'),
                (3, 3, '0337912369', '2021/04/29', '2021/04/30', 'pending', 'unpaid'),
                (4, 4, '0334445469', '2021/04/25', '2021/04/27', 'pending', 'unpaid'),
				(5, 5, '0311445469', '2021/04/28', '2021/04/30', 'pending', 'unpaid'),
				(6, 6, '0852445469', '2021/05/25', '2021/05/27', 'pending', 'unpaid'),
				(7, 7, '0334125469', '2021/05/5', '2021/05/7', 'pending', 'unpaid'),
				(8, 8, '0314745469', '2021/05/10', '2021/05/17', 'pending', 'unpaid'),
				(9, 9, '0334445469', '2021/5/5', '2021/5/17', 'pending', 'unpaid'),
				(10,10,'0339275169', '2021/05/25', '2021/05/27', 'pending', 'unpaid');

CREATE TABLE IF NOT EXISTS `roomstatus` (
	`roomstatus_id` INT(11) NOT NULL AUTO_INCREMENT,
	`room_id` INT(11) NOT NULL,
	`arrive` DATE NOT NULL,
	`depart` DATE NOT NULL,
	PRIMARY KEY (`roomstatus_id`),
	FOREIGN KEY(room_id) REFERENCES `rooms`(room_id) on delete cascade on update cascade
);

INSERT INTO `roomstatus` (`room_id`, `arrive`, `depart`) 
            VALUES  (5, "2021/04/15", "2021/04/18"),
                    (10, "2021/04/20", "2021/04/22"),
                    (12, "2021/04/29", "2021/04/30"),
                    (13, "2021/04/25", "2021/04/27");
                    
CREATE TABLE IF NOT EXISTS `basket` (
    `basket_id` INT(11) NOT NULL AUTO_INCREMENT,
    `user_id` INT(11) NOT NULL,
    `room_id` INT(11) NOT NULL,
    PRIMARY KEY (`basket_id`),
	FOREIGN KEY(user_id) REFERENCES `users`(user_id) on delete cascade on update cascade ,
	FOREIGN KEY(room_id) REFERENCES `rooms`(room_id) on delete cascade on update cascade
);