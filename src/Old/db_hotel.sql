
 -- Event:Hang ngay deu check key cua request co het han hay chua neu het han thi update request.status="expired"

-- Function: tao key ;tao ra mot key va khong trung lap; khi nguoi book dat phong bnay thi chi can dua key cho provider der lay thong tin phong

-- Trigger: truoc khi insert request caan kiem tra phong insert co available khong



-- Triiger: kiem tra update request , status bang sucsees la thanh cong va expired la key da het han nen khong the chinh sua; check khi update status accept '
--  thi phong do phai available


-- canel khi provider da accept ma cancel

-- Trigger: check truoc khi them room moi thi room do da ton tai chua






-- Function: checkin key ; kiem tra xem key co hop le hay lkhong , neu hop le va dung ngay checkin thi moi chap nhan;
-- Neu goi function return true co nghia la thanh cong( se luu vao bang payment va bang history ); sua trang thai cua status request nay la success





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
    `image` varchar(255),
    `address` varchar(255),
    `des` text,
    FOREIGN KEY (`id_location`) REFERENCES `hotel_location`(`id`) on delete cascade on update cascade
    );




 INSERT INTO `hotel` (`hotel_name`,`id_location`,`address`,`des`,`image`) 
        VALUES ("Quang Trung Hotel"
        ,2
        ,"1118 Quang Trung, Phường 8, Gò Vấp, Thành phố Hồ Chí Minh, Vietnam"
        ,"Situated on the unspoilt shores of Hoi An Beach, Four Seasons The Nam Hai, Hoi An, Vietnam offers luxurious villas with iPod docks and free WiFi access. It boasts 3 beachfront pools and a spa. "
        ,"/images/hotel/266535907.webp"),
                       
               ("Lotus Center Hotel"
               ,1
               ,"102 Lê Thị Hồng Gấm, Phường Nguyễn Thái Bình, Quận 1, Thành phố Hồ Chí Minh 700000, Vietnam"
               ,"Icon Saigon - LifeStyle Design Hotel has a restaurant, outdoor swimming pool, a fitness centre and bar in Ho Chi Minh City. "
               ,"/images/hotel/77173481.webp"),         
                ("Roseland Centa Hotel & Spa"
                ,3
                ,"15/1A-15A/57A, Lê Thánh Tôn, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh, Vietnam"
                ,"Situated in Ho Chi Minh City, 500 metres from War Remnants Museum, Orchids Saigon Hotel features accommodation with a restaurant, free private parking, a fitness centre and a bar. "
                ,"/images/hotel/211635549.webp"),         
               ("Somerset Chancellor Court Serviced Residence"
               ,2
               ,"21-23 Nguyễn Thị Minh Khai, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh, Vietnam"
               ,"Boasting a fitness centre, bar and views of city, Vinpearl Luxury Landmark 81 is set in Ho Chi Minh City. Featuring a 24-hour front desk, this property also has a restaurant and an outdoor pool. "
               ,"/images/hotel/257959581.webp"),          
              ("The Myst Dong Khoi"
              ,3
              ,"4-6-8 Hồ Huấn Nghiệp, street, Quận 1, Thành phố Hồ Chí Minh 700000, Vietnam"
              ,"Featuring classic contemporary interiors and designs, The Myst Dong Khoi offers a sophisticated accommodation in the heart of District 1 in Ho Chi Minh City. "
              ,"/images/hotel/158983255.webp"),
              ("Mia Saigon - luxury boutique hotel"
              ,2
              ,"2-4 Đường số 10, An Phú, Quận 2, Thành phố Hồ Chí Minh 700000, Vietnam"
              ,"Housed in a restored colonial building, Grand Hotel Saigon boasts spacious accommodation in District 1 in Ho Chi Minh. The hotel features an outdoor swimming pool and 2 on-site restaurants. "
              ,"/images/hotel/252155027.webp"),
             ("Four Seasons The Nam Hai, Hoi An,Vietnam"
             ,4
             ,"1118 Quang Trung, Phường 2, Gò Vấp, Thành phố Hồ Chí Minh, Vietnam"
             ,"Situated beside Now Zone Shopping Mall, this 5-star property features modern rooms with cable flat-screen TV and bathroom. "
             ,"/images/hotel/258657705.webp"),
               ("Quang Trung Hotel 2"
               ,2
               ,"1118 Quang Trung, Phường 9, Gò Vấp, Thành phố Hồ Chí Minh, Vietnam"
               ,"Situated on the unspoilt shores of Hoi An Beach, Four Seasons The Nam Hai, Hoi An, Vietnam offers luxurious villas with iPod docks and free WiFi access. It boasts 3 beachfront pools and a spa. "
               ,"/images/hotel/266535907.webp"),         
             
               ("Lotus Center Hotel 2"
               ,1
               ,"102 Lê Thị Hồng Gấm, Phường Nguyễn Thái Bình, Quận 2, Thành phố Hồ Chí Minh 700000, Vietnam"
               ,"
Icon Saigon - LifeStyle Design Hotel has a restaurant, outdoor swimming pool, a fitness centre and bar in Ho Chi Minh City. "
,"/images/hotel/91322151.webp"),              
                ("Roseland Centa Hotel & Spa 2"
                ,4
                ,"15/1A-15A/57A, Lê Thánh Tôn, Bến Nghé, Quận 2, Thành phố Hồ Chí Minh, Vietnam"
                ,"
Situated in Ho Chi Minh City, 500 metres from War Remnants Museum, Orchids Saigon Hotel features accommodation with a restaurant, free private parking, a fitness centre and a bar. "
,"/images/hotel/253186602.webp"),            
               ("Somerset Chancellor Court Serviced Residence 2"
               ,4
               ,"21-23 Nguyễn Thị Minh Khai, Bến Nghé, Quận 3, Thành phố Hồ Chí Minh, Vietnam"
               ,"
Boasting a fitness centre, bar and views of city, Vinpearl Luxury Landmark 81 is set in Ho Chi Minh City. Featuring a 24-hour front desk, this property also has a restaurant and an outdoor pool. "
,"/images/hotel/257959581.webp"), 
              ("The Myst Dong Khoi 2"
              ,2
              ,"4-6-8 Hồ Huấn Nghiệp, street, Quận 1, Thành phố Hồ Chí Minh 700000, Vietnam"
              ,"
Featuring classic contemporary interiors and designs, The Myst Dong Khoi offers a sophisticated accommodation in the heart of District 1 in Ho Chi Minh City. "
,"/images/hotel/261490231.webp"),         
              ("Mia Saigon - luxury boutique hotel"
              ,5
              ,"2-4 Đường số 10, An Phú, Quận 2, Thành phố Hồ Chí Minh 700000, Vietnam"
              ,"
Housed in a restored colonial building, Grand Hotel Saigon boasts spacious accommodation in District 1 in Ho Chi Minh. The hotel features an outdoor swimming pool and 2 on-site restaurants. "
,"/images/hotel/252155027.webp "),
           
             ("Four Seasons The Nam Hai, Hoi An, Vietnam 2"
             ,5
             ,"Block Ha My, Dong B, Điện Bàn, Quảng Nam, Vietnam"
             ,"
Situated beside Now Zone Shopping Mall, this 5-star property features modern rooms with cable flat-screen TV and bathroom. "
,"/images/hotel/258657705.webp");

              
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
               ("Suites", 290, 10,2),
               
               ("Family", 690, 10,6),
               ("Couple", 390, 10,6),
               ("Standard", 290, 10,7),
               ("King Room", 590, 10,7),
               ("Twin Room", 490, 10,7),
               ("Hollywood Twin Room", 390, 10,7),
               ("Studio Room", 290, 10,7),
               ("Suites", 290, 10,9),
               ("Family", 690, 10,9),
               ("Couple", 390, 10,9),
               ("Standard", 290, 10,8),
               ("King Room", 590, 10,8),
               ("Twin Room", 490, 10,8),
               ("Hollywood Twin Room", 390, 10,8),
               ("Studio Room", 290, 10,8),
               ("Suites", 290, 10,9),
                  ("Family", 690, 10,9),
               ("Couple", 390, 10,10),
               ("Standard", 290, 10,10),
               ("King Room", 590, 10,10),
               ("Twin Room", 490, 10,11),
               ("Hollywood Twin Room", 390, 10,11),
               ("Studio Room", 290, 10,12),
               ("Suites", 290, 10,13),
               ("Family", 690, 10,13),
               ("Couple", 390, 10,12),
               ("Standard", 290, 10,12),
               ("King Room", 590, 10,12),
               ("Twin Room", 490, 10,12),
               ("Hollywood Twin Room", 390, 10,12),
               ("Studio Room", 290, 10,12),
               ("Suites", 290, 10,12),

                 ("Twin Room", 490, 10,13),
               ("Hollywood Twin Room", 390, 10,14),
               ("Studio Room", 290, 10,14),
               ("Suites", 290, 10,13),
               ("Family", 690, 10,13),
               ("Couple", 390, 10,13),
               ("Standard", 290, 10,13),
               ("King Room", 590, 10,14),
               ("Twin Room", 490, 10,14),
               ("Hollywood Twin Room", 390, 10,14),
               ("Studio Room", 290, 10,14),
               ("Suites", 290, 10,14);
 
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


INSERT INTO `rooms` (`roomtype_id`, `noroom`, `status`, `phone`,`img`)
            VALUES (1, 501, "available", 19005051,"/images/room/1.jpg"),
                    (1, 502, "available", 19005051,"/images/room/2.jpg"),
                    (1, 503, "available", 19005051,"/images/room/3.jpg"),
                    (1, 504, "available", 19005051,"/images/room/5.jpg"),
                    (1, 505, "available", 19005051,"/images/room/5.jpg"),
                    (1, 506, "available", 19005051,"/images/room/6.jpg"),
                    (1, 507, "available", 19005051,"/images/room/7.jpg"),
                    (1, 508, "available", 19005051,"/images/room/8.jpg"),
                    (1, 509, "available", 19005051,"/images/room/9.jpg"),
                    (1, 510, "available", 19005051,"/images/room/10.jpg"),
                    (2, 401, "available", 19005051,"/images/room/11.jpg"),
                    (2, 402, "available", 19005051,"/images/room/12.jpg"),
                    (2, 403, "available", 19005051,"/images/room/13.jpg"),
                    (2, 404, "available", 19005051,"/images/room/14.jpg"),
                    (2, 405, "available", 19005051,"/images/room/15.jpg"),
                    (2, 406, "available", 19005051,"/images/room/16.jpg"),
                    (2, 407, "available", 19005051,"/images/room/17.jpg"),
                    (2, 408, "available", 19005051,"/images/room/18.jpg"),
                    (2, 409, "available", 19005051,"/images/room/19.jpg"),
                    (2, 410, "available", 19005051,"/images/room/20.jpg"),
                    (3, 301, "available", 19005051,"/images/room/21.jpg"),
                    (3, 302, "available", 19005051,"/images/room/22.jpg"),
                    (3, 303, "available", 19005051,"/images/room/23.jpg"),
                    (3, 304, "available", 19005051,"/images/room/24.jpg"),
                    (3, 305, "available", 19005051,"/images/room/25.jpg"),
                    (3, 306, "available", 19005051,"/images/room/26.jpg"),
                    (3, 307, "available", 19005051,"/images/room/27.jpg"),
                    (3, 308, "available", 19005051,"/images/room/28.jpg"),
                    (3, 309, "available", 19005051,"/images/room/29.jpg"),
                    (3, 310, "available", 19005051,"/images/room/30.jpg"),
                    (4, 201, "available", 19005051,"/images/room/31.jpg"),
                    (4, 202, "available", 19005051,"/images/room/32.jpg"),
                    (4, 203, "available", 19005051,"/images/room/33.jpg"),
                    (4, 204, "available", 19005051,"/images/room/34.jpg"),
                    (4, 205, "available", 19005051,"/images/room/35.jpg"),
                    (4, 206, "available", 19005051,"/images/room/36.jpg"),
                    (4, 207, "available", 19005051,"/images/room/37.jpg"),
                    (4, 208, "available", 19005051,"/images/room/38.jpg"),
                    (4, 209, "available", 19005051,"/images/room/39.jpg"),
                    (4, 210, "available", 19005051,"/images/room/40.jpg"),
                    (5, 210, "available", 19005051,"/images/room/41.jpg"),
                    (5, 210, "available", 19005051,"/images/room/42.jpg"),
                    (5, 406, "available", 19005051,"/images/room/16.jpg"),
                    (5, 407, "available", 19005051,"/images/room/17.jpg"),
                    (6, 408, "available", 19005051,"/images/room/18.jpg"),
                    (6, 409, "available", 19005051,"/images/room/19.jpg"),
                    (6, 410, "available", 19005051,"/images/room/20.jpg"),
                    (6, 301, "available", 19005051,"/images/room/21.jpg"),
                    (7, 302, "available", 19005051,"/images/room/22.jpg"),
                    (7, 303, "available", 19005051,"/images/room/23.jpg"),
                    (7, 304, "available", 19005051,"/images/room/24.jpg"),
                    (8, 305, "available", 19005051,"/images/room/25.jpg"),
                    (8, 306, "available", 19005051,"/images/room/26.jpg"),
                    (8, 307, "available", 19005051,"/images/room/27.jpg"),
                    (8, 308, "available", 19005051,"/images/room/28.jpg"),
                    (9, 309, "available", 19005051,"/images/room/29.jpg"),
                    (9, 310, "available", 19005051,"/images/room/30.jpg"),
                    (9, 201, "available", 19005051,"/images/room/31.jpg"),
                    (10, 202, "available", 19005051,"/images/room/32.jpg"),
                    (10, 203, "available", 19005051,"/images/room/33.jpg"),
                    (10, 204, "available", 19005051,"/images/room/34.jpg"),
                    (11, 205, "available", 19005051,"/images/room/35.jpg"),
                    (11, 206, "available", 19005051,"/images/room/36.jpg"),
                    (11, 207, "available", 19005051,"/images/room/37.jpg"),
                    (12, 208, "available", 19005051,"/images/room/38.jpg"),
                    (12, 209, "available", 19005051,"/images/room/39.jpg"),
                    (12, 210, "available", 19005051,"/images/room/40.jpg"),
                                        (12, 210, "available", 19005051,"/images/room/41.jpg"),
                                        (12, 210, "available", 19005051,"/images/room/42.jpg");

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


CREATE TABLE request (
    
    id int not null PRIMARY key AUTO_INCREMENT,
    room_id int ,
	`status` varchar(255) default "received",
    checkin date   ,
    checkout date  ,
    `key` varchar(255) ,
    `des` text,
    FOREIGN KEY(room_id) REFERENCES `rooms`(room_id) on delete cascade on update cascade
    );
CREATE TABLE IF NOT EXISTS `basket` (
    `basket_id` INT(11) NOT NULL AUTO_INCREMENT,
    `user_id` INT(11) NOT NULL,
    `room_id` INT(11) NOT NULL,
    id_request int,
    PRIMARY KEY (`basket_id`),
	FOREIGN KEY(user_id) REFERENCES `users`(user_id) on delete cascade on update cascade,
    UNIQUE(basket_id,id_request),
	FOREIGN KEY(room_id) REFERENCES `rooms`(room_id) on delete cascade on update cascade,
    FOREIGN KEY(id_request) REFERENCES `request`(id) on delete cascade on update cascade

);


CREATE TABLE history (
    id int not null primary key AUTO_INCREMENT,
    id_request int not null,
    user_id int not null ,
    room_id int not null ,
    checkin date,
    checkout date,
    create_at timestamp  ,
    FOREIGN KEY(user_id) REFERENCES `users`(user_id) on delete cascade on update cascade ,
	FOREIGN KEY(room_id) REFERENCES `rooms`(room_id) on delete cascade on update cascade,
    FOREIGN KEY(id_request) REFERENCES `request`(id) on delete cascade on update cascade
);

    


CREATE TABLE providers(
	id int not null AUTO_INCREMENT PRIMARY KEY,
    address varchar(510),
    id_hotel int not null ,
    user_id int ,
    UNIQUE(id,user_id),
    FOREIGN KEY(user_id) REFERENCES `users`(user_id) on delete cascade on update cascade ,
	FOREIGN KEY(id_hotel) REFERENCES `hotel`(id) on delete cascade on update cascade
);

CREATE TABLE payment(
    id int not null AUTO_INCREMENT PRIMARY KEY,
    id_provider int ,
    id_request int ,
    create_at timestamp DEFAULT CURRENT_TIMESTAMP,
    cost decimal(12,2),
    FOREIGN KEY(id_request) REFERENCES `request`(id) on delete cascade on update cascade,
    FOREIGN KEY(id_provider) REFERENCES `providers`(id) on delete cascade on update cascade
    );
    


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
        VALUES (1, 1, "0337965469", "2021/04/15", "2021/04/18", "pending", 'unpaid'),
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






-- Function tao key ;tao ra mot key va khong trung lap; khi nguoi book dat phong bnay thi chi can dua key cho provider der lay thong tin phong

    
DELIMITER //

CREATE FUNCTION createKey()
returns varchar(255) 
BEGIN 
DECLARE a int;
DECLARE b varchar(255);
SELECT id into a from request ORDER BY id DESC LIMIT 1;
set b=concat(
  substring('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', rand(@seed:=round(rand(a)*4294967296))*36+1, 1),
  substring('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', rand(@seed:=round(rand(@seed)*4294967296))*36+1, 1),
  substring('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', rand(@seed:=round(rand(@seed)*4294967296))*36+1, 1),
  substring('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', rand(@seed:=round(rand(@seed)*4294967296))*36+1, 1),
  substring('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', rand(@seed:=round(rand(@seed)*4294967296))*36+1, 1),
  substring('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', rand(@seed:=round(rand(@seed)*4294967296))*36+1, 1),
  substring('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', rand(@seed:=round(rand(@seed)*4294967296))*36+1, 1),
  substring('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', rand(@seed:=round(rand(@seed)*4294967296))*36+1, 1),
  substring('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', rand(@seed:=round(rand(@seed)*4294967296))*36+1, 1),
  substring('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', rand(@seed:=round(rand(@seed)*4294967296))*36+1, 1),
  substring('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', rand(@seed:=round(rand(@seed)*4294967296))*36+1, 1),
  substring('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', rand(@seed:=round(rand(@seed)*4294967296))*36+1, 1),
  substring('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', rand(@seed:=round(rand(@seed)*4294967296))*36+1, 1),
  substring('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', rand(@seed:=round(rand(@seed)*4294967296))*36+1, 1),
  substring('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', rand(@seed:=round(rand(@seed)*4294967296))*36+1, 1),
  substring('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', rand(@seed:=round(rand(@seed)*4294967296))*36+1, 1),
  substring('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', rand(@seed:=round(rand(@seed)*4294967296))*36+1, 1),
  substring('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', rand(@seed)*36+1, 1)
);

RETURN b;
END //
delimiter;




-- Trigger truoc khi insert request caan kiem tra phong insert co available khong




delimiter //
    create trigger before_request_insert 	
		before insert on request FOR EACH ROW
	begin
		declare errormessage text;
        declare roomstatus text;
        SELECT rooms.status into roomstatus from rooms where room_id=NEW.room_id;
        
        if roomstatus <> "available" then
        signal sqlstate '45000' SET message_text = "this room not available";
        
        end if;
         if DATEDIFF(NEW.checkout,NEW.checkin) <= 0then
        signal sqlstate '45000' SET message_text ="checkout date must be grater than checkin day";
        
        end if;
        
        end //
        
delimiter ;


-- Triiger kiem tra update request , status bang sucsees la thanh cong va expired la key da het han nen khong the chinh sua; check khi update status accept '
-- thi phong do phai available
-- canel khi provider da accept ma cancel




delimiter //
    create trigger before_request_update 	
		before update on request FOR EACH ROW
	begin
		declare errormessage text;
        declare roomstatus text;
        SELECT rooms.status into roomstatus from rooms where room_id=NEW.room_id;

        if DATEDIFF(New.checkin,CURDATE())<0 OR DATEDIFF(NEW.checkout,CURDATE()) < 1    then
                signal sqlstate '45000' SET message_text ="Date of checkin or checkout invalid";
        end if;
        IF OLD.status="success" then
                signal sqlstate '45000' SET message_text ="cannot modify";
        end if;
        IF OLD.status="expired" then
                signal sqlstate '45000' SET message_text ="cannot modify";
        end if;
        
        if NEW.status="accept" and roomstatus <> "available" then
                signal sqlstate '45000' SET message_text ="this room not available";
        end if;

        if NEW.status="cancel" then
               update rooms set rooms.status="available" where rooms.room_id=OLD.room_id;
        end if; 
        
        end //
        
delimiter ;



-- Trigger check truoc khi them room moi thi room do da ton tai chua

delimiter //
    create trigger before_rooms_insert 	
		before insert on rooms FOR EACH ROW
	begin
        declare noroom_check int;
 
        SELECT rooms.noroom into noroom_check from rooms where roomtype_id=NEW.roomtype_id;
       
        if NEW.noroom=noroom_check then
                signal sqlstate '45000' SET message_text ="The noroom already exists";
        end if; 
        
        end //
        
delimiter ;


-- Function checkin key ; kiem tra xem key co hop le hay lkhong , neu hop le va dung ngay checkin thi moi chap nhan;
-- Neu goi function return true co nghia la thanh cong( se luu vao bang payment va bang history ); sua trang thai cua status request nay la success


DELIMITER //
CREATE FUNCTION checkInKey(keycheck varchar(255))         
    RETURNS BOOLEAN    
    BEGIN 
       DECLARE check_valid BOOLEAN default FALSE; 
      declare finished int default 0;
     declare status1  varchar(255);
     declare key1 varchar(255);
     declare checkin1 date ;
    declare checkout1 date;
    declare id_request int;
    declare id_provider int;
    declare id_room int;
    declare id_user int;
    declare cost decimal(10,2);
	declare curloop cursor for select `id`,`room_id`,`key`,`status`,`checkin`,`checkout` from request;
    declare continue handler for not found set finished = 1;
    open curloop;    
    label_loop: loop
		if finished = 1 then
			leave label_loop;
        end if;
        fetch curloop into id_request,id_room, key1,status1,checkin1,checkout1;
        if key1 = keycheck AND status1 = "accept" then
                if DATEDIFF(checkin1,CURDATE()) <>0 then
                signal sqlstate '45000' SET message_text ="Date checkin is not today";
                else 
                set check_valid=TRUE;
                leave label_loop;
               end if;
        end if ;      
    end loop label_loop;
    close curloop;  
    if check_valid=TRUE then
       
        update request set request.status="success" where request.id= id_request;
        select providers.id into id_provider from providers
        inner join hotel on hotel.id=providers.id_hotel
        inner join roomtypes on roomtypes.hotel_id=hotel.id
        inner join rooms on rooms.roomtype_id=roomtypes.roomtype_id
        where rooms.room_id=id_room;
        
        select roomtypes.rent into cost from roomtypes
        inner join rooms on rooms.roomtype_id=roomtypes.roomtype_id
        where rooms.room_id=id_room;

        select basket.user_id into id_user from basket
        inner join request on basket.id_request=request.id
        where basket.id_request=id_request;

        insert into payment(`id_provider`,`id_request`,`cost`) values(id_provider,id_request,DATEDIFF(checkout1,checkin)*cost);
        insert into history(`id_request`,`room_id`,`user_id`,`checkin`,`checkout`,`create_at`) values(id_request,id_room,id_user,checkin1,checkout1,now());

    end if;
    RETURN check_valid; 
  END //

DELIMITER ;


--Event : Hang ngay deu check key cua request co het han hay chua neu het han thi update request.status="expired"

delimiter //
 
 create event destroyKeyExpired
 on schedule every  1 day

 do
  begin
	declare checkInDay date;
    DECLARE statusKey varchar(255);
    DECLARE id_request int;
    declare finished int default 0;
	declare curloop cursor for select id,`status`,`checkin` from request;
    declare continue handler for not found set finished = 1;
    open curloop;    
    label_loop: loop
		if finished = 1 then
			leave label_loop;
        end if;
        fetch curloop into id_request, statusKey,checkInDay;
        if statusKey <> "success" AND DATEDIFF(checkInDay,CURDATE()) < 0 then
               UPDATE request set `status`="expired" where request.id=id_request;
        end if ;      
    end loop label_loop;
    close curloop;  
   

  end//
  
delimiter ;
