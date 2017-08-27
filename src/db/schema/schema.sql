CREATE TABLE users (
	id SERIAL PRIMARY KEY,
	username VARCHAR(20) UNIQUE NOT NULL,
	email VARCHAR(50) UNIQUE NOT NULL,
	password VARCHAR(255) NOT NULL,
	current_city VARCHAR(50) NOT NULL DEFAULT 'Edit Profile to Change City',
	img_url VARCHAR(255) DEFAULT 'http://support.plymouth.edu/kb_images/Yammer/default.jpeg',
	date_joined TIMESTAMP DEFAULT NOW()
);

CREATE TABLE posts (
	id SERIAL PRIMARY KEY,
	title VARCHAR(200) NOT NULL,
	content TEXT NOT NULL,
	created_at TIMESTAMP DEFAULT NOW(),
	user_id SERIAL REFERENCES users(id)
);

CREATE TABLE sacred_sites (
	id SERIAL PRIMARY KEY,
	site_name VARCHAR(255) UNIQUE NOT NULL,
	img_url VARCHAR(255) NOT NULL,
	post_id SERIAL REFERENCES posts(id)
);

-- CREATE TABLE user_posts (
-- 	user_id SERIAL REFERENCES users(id),
-- 	sacred_site_id SERIAL REFERENCES sacred_sites(id)
-- );
