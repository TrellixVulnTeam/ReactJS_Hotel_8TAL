CREATE TABLE IF NOT EXISTS `roomtypes` (
    `roomtype_id` INT(11) NOT NULL AUTO_INCREMENT,
    `roomtype` VARCHAR(255) NOT NULL,
    `rent` DECIMAL(10) NOT NULL,
    `quantity` INT(11) NOT NULL,
    PRIMARY KEY (`roomtype_id`)
); 

INSERT INTO `roomtypes` (`roomtype`, `rent`, `quantity`) 
        VALUES ("Luxury", 590, 10),
               ("Family", 490, 10),
               ("Couple", 390, 10),
               ("Standard", 290, 10);
 
CREATE TABLE IF NOT EXISTS `rooms` (
    `room_id` INT(11) NOT NULL AUTO_INCREMENT,
    `roomtype_id` INT(11) NOT NULL,
    `noroom` INT(11) NOT NULL,
    `img` VARCHAR(255) NOT NULL,
    `status` VARCHAR(255) NOT NULL,
    `phone` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`room_id`),
    FOREIGN KEY (roomtype_id) REFERENCES `roomtypes`(roomtype_id) on delete cascade on update cascade
);

CREATE TABLE IF NOT EXISTS `roomstatus` (
	`roomstatus_id` INT(11) NOT NULL AUTO_INCREMENT,
	`room_id` INT(11) NOT NULL,
	`arrive` DATE NOT NULL,
	`depart` DATE NOT NULL,
	PRIMARY KEY (`roomstatus_id`),
	FOREIGN KEY(room_id) REFERENCES `rooms`(room_id) on delete cascade on update cascade
);


INSERT INTO `rooms` (`roomtype_id`, `noroom`, `status`, `phone`)
            VALUES (1, 501, "available", 19005051),
                    (1, 502, "available", 19005051),
                    (1, 503, "available", 19005051),
                    (1, 504, "available", 19005051),
                    (1, 505, "available", 19005051),
                    (1, 506, "available", 19005051),
                    (1, 507, "available", 19005051),
                    (1, 508, "available", 19005051),
                    (1, 509, "available", 19005051),
                    (1, 510, "available", 19005051),
                    (2, 401, "available", 19005051),
                    (2, 402, "available", 19005051),
                    (2, 403, "available", 19005051),
                    (2, 404, "available", 19005051),
                    (2, 405, "available", 19005051),
                    (2, 406, "available", 19005051),
                    (2, 407, "available", 19005051),
                    (2, 408, "available", 19005051),
                    (2, 409, "available", 19005051),
                    (2, 410, "available", 19005051),
                    (3, 301, "available", 19005051),
                    (3, 302, "available", 19005051),
                    (3, 303, "available", 19005051),
                    (3, 304, "available", 19005051),
                    (3, 305, "available", 19005051),
                    (3, 306, "available", 19005051),
                    (3, 307, "available", 19005051),
                    (3, 308, "available", 19005051),
                    (3, 309, "available", 19005051),
                    (3, 310, "available", 19005051),
                    (4, 201, "available", 19005051),
                    (4, 202, "available", 19005051),
                    (4, 203, "available", 19005051),
                    (4, 204, "available", 19005051),
                    (4, 205, "available", 19005051),
                    (4, 206, "available", 19005051),
                    (4, 207, "available", 19005051),
                    (4, 208, "available", 19005051),
                    (4, 209, "available", 19005051),
                    (4, 210, "available", 19005051);
                    
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
        VALUES ("Nguyen Dinh Kha", "dinhkhakl01@gmail.com", "$2y$10$whZn4byonj/hehXiXp8eFuLUIJeqr4S1ehVPr106aHyF6IS3a41gK", "verified", "admin"),
        ("Kha Nguyen", "kha.nguyen22@student.passerellesnumeriques.org", "$2y$10$xlKuRozj7KYvifghzkkV7uj9rJYIOsvWSwZIh8y0OQNG1bw6HQhee", "verified", "admin"),
        ("Admin", "admin@gmail.com", "admin", "verified", "admin");

        INSERT INTO `users` (`name`, `email`, `password`, `status`, `role`) 
        VALUES ("Nguyen Dinh Kha", "dinhkhakl01@gmail.com", "khanguyen123456", "verified", "admin"),
        ("Nguyen Doan Ngoc Hau", "ndnh01@gmail.com", "hauNguyen123456", "verified", "admin"),
		("Kha Nguyen", "hau.nguyen22@student.passerellesnumeriques.org", "haunguyen123456", "verified", "admin"),
        ("Admin", "admin@gmail.com", "admin", "verified", "admin"),
        ("Trung Trinh", "trungtrinh@gmail.com", "trungtrinh123456", "verified", "user"),
        ("Nhu Quynh", "nhuquynh@gmail.com", "nhuquynh123456", "verified", "user"),
		("Thu Sang", "thusang@gmail.com", "thusang123456", "verified", "user"),
		("Dinh Kha", "dinhkha@gmail.com", "dinhkha123456", "verified", "user"),
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



----------------------------------------------------------------------------------
drop table basket;
drop table contacts;
drop table roomsbooks;
drop table rooms;
drop table roomstatus;
drop table roomtypes;
drop table uses;