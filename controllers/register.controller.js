const register_model = require('../models/register.model')

module.exports = {
    create_account: (req, res) => {
        let {username, email, password, sex, question, answer} = {...req.body};
        connection.query(register_model.create_account, 
            [username, email, password, sex, question, answer],
             (err, result) => {
            if (!err) {
                return res.status(200).json({result}).end();
            } else {
                return res.status(500).json(err);
            }
        })
    }      
}