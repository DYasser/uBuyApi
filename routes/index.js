const express = require("express"),
    router = express.Router(),
    catalogue = require("../controllers/catalogue.controller"),
    register = require("../controllers/register.controller"),
    login = require("../controllers/login.controller")

//Cheking if api is working route
router.get("/", (req, res) => {
    res.send("ok")
})

router.get('/all',catalogue.all_info);
router.post('/account',register.create_account);
router.get('/login',login.match);

module.exports = router;