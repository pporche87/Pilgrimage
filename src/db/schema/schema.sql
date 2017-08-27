CREATE TABLE users (
	id SERIAL PRIMARY KEY,
	username VARCHAR(20) UNIQUE NOT NULL,
	email VARCHAR(50) UNIQUE NOT NULL,
	password VARCHAR(255) NOT NULL,
	current_city VARCHAR(50) NOT NULL DEFAULT 'Edit Profile to Change City',
	img_url VARCHAR(255) DEFAULT 'http://support.plymouth.edu/kb_images/Yammer/default.jpeg',
	date_joined TIMESTAMP DEFAULT NOW()
);
