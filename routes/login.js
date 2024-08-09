const express = require("express");
const router = express.Router();

const credential = {
    email: "admin@gmail.com",
    password: "admin123",
}

// login user
router.post("/login", (req, res) => {
    if (req.body.email === credential.email && req.body.password === credential.password) {
        req.session.user = req.body.email;
        // res.redirect("/dashbord");
        res.end("Login Successful");
    } else {
        res.end("Invalide Username");
    }
});




module.exports = router;