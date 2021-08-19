const create_account = `
SET @username = ?, 
    @email = ?, 
    @password = ?, 
    @sex = ?, 
    @question = ?, 
    @answer = ?; 

INSERT INTO users (username, email, password, sex, question, answer) 
VALUES (@username, @email, @password, @sex, @question, @answer);
`

module.exports = {
    create_account
}