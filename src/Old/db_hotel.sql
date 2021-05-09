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
    FOREIGN KEY (roomtype_id) REFERENCES `roomtypes`(roomtype_id)
);

CREATE TABLE IF NOT EXISTS `roomstatus` (
	`roomstatus_id` INT(11) NOT NULL AUTO_INCREMENT,
	`room_id` INT(11) NOT NULL,
	`arrive` DATE NOT NULL,
	`depart` DATE NOT NULL,
	PRIMARY KEY (`roomstatus_id`),
	FOREIGN KEY(room_id) REFERENCES `rooms`(room_id)
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
    FOREIGN KEY(user_id) REFERENCES `users`(user_id),
    FOREIGN KEY(room_id) REFERENCES `rooms`(room_id)
);

INSERT INTO `roombooks` (`user_id`, `room_id`, `phone`,  `arrive`, `depart`, `status`, `payment`)
        VALUES (2, 5, '0337965469', '2021/04/15', '2021/04/18', 'pending', 'unpaid'),
                (1, 10, '0337965469', '2021/04/20', '2021/04/22', 'pending', 'unpaid'),
                (2, 12, '0337965469', '2021/04/29', '2021/04/30', 'pending', 'unpaid'),
                (1, 13, '0337965469', '2021/04/25', '2021/04/27', 'pending', 'unpaid');

CREATE TABLE IF NOT EXISTS `roomstatus` (
	`roomstatus_id` INT(11) NOT NULL AUTO_INCREMENT,
	`room_id` INT(11) NOT NULL,
	`arrive` DATE NOT NULL,
	`depart` DATE NOT NULL,
	PRIMARY KEY (`roomstatus_id`),
	FOREIGN KEY(room_id) REFERENCES `rooms`(room_id)
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
	FOREIGN KEY(user_id) REFERENCES `users`(user_id),
	FOREIGN KEY(room_id) REFERENCES `rooms`(room_id)
);