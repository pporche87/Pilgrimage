-- CREATE TABLE users (
-- 	id SERIAL PRIMARY KEY,
-- 	username VARCHAR(20) UNIQUE NOT NULL,
-- 	email VARCHAR(50) UNIQUE NOT NULL,
-- 	password VARCHAR(255) NOT NULL,
-- 	current_city VARCHAR(50) NOT NULL DEFAULT 'Edit Profile to Change City',
-- 	img_url VARCHAR(255) DEFAULT 'http://support.plymouth.edu/kb_images/Yammer/default.jpeg',
-- 	date_joined TIMESTAMP DEFAULT NOW()
-- );

CREATE TABLE sacred_sites (
	id SERIAL PRIMARY KEY,
	site_name VARCHAR(255) UNIQUE NOT NULL,
	img_url VARCHAR(255) NOT NULL
);

INSERT INTO sacred_sites (site_name, img_url)
VALUES ('Machu Picchu', 'http://www.earths-edge.com/wp-content/uploads/2017/01/Machu-Picchu.jpg'),
 			 ('Sedona', 'http://sedonaproperty.net/images/photoslider/slider1.jpg');

CREATE TABLE posts (
	id SERIAL PRIMARY KEY,
	title VARCHAR(200) NOT NULL,
	content TEXT NOT NULL,
	created_at TIMESTAMP DEFAULT NOW(),
	user_id SERIAL REFERENCES users(id),
	sacred_sites_id SERIAL REFERENCES sacred_sites(id)
);

INSERT INTO posts (title, content, user_id, sacred_sites_id)
VALUES ('Rusty Ridge', 'What an awesome location love it!', 1, 1),
       ('Old Peak', 'You wont be dissapointed when you check out this place', 2, 1),
       ('Dynamic Ocean', 'text content', 1, 2),
			 ('Inca Trail', 'text content', 2, 2);
