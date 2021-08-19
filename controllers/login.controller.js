login_model = require('../models/login.model');

module.exports = {
    match: (req, res) => {
        let { username, password } = {...req.body}
        connection.query( login_model.search_match , [username, password], (err, result) => {
            if (!err) {
                return res.status(200).json({
                    result
                }).end();
            } else {
                return res.status(404).send(err);
            }
        })
    }
}