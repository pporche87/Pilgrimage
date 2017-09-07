-- SELECT *
-- FROM posts
-- WHERE user_id = 1;

-- SELECT username FROM users
-- WHERE id = (SELECT user_id FROM posts WHERE id=1);

SELECT users.img_url, posts.id, posts.title, posts.content FROM users
JOIN posts ON user_id=users.id;
