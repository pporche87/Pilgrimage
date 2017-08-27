-- SELECT *
-- FROM posts
-- WHERE user_id = 1;

SELECT username FROM users
WHERE id = (SELECT user_id FROM posts WHERE id=1);
