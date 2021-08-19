catalogue_model = require('../models/catalogue.model');

module.exports = {
    all_info: (req, res) => {
        connection.query( catalogue_model.que_all_books , (err, result) => {
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