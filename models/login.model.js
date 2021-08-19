const search_match = `
SET @username = ?,
    @password = ?;
SELECT username, password FROM users 
WHERE username = @username 
AND password = @password;
`

module.exports = {
    search_match
}