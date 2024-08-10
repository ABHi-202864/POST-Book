const express = require("express");
const router = express.Router();

const credential = {
    email: "admin@gmail.com",
    password: "admin123",
}

// login user
router.post("/", (req, res) => {
    if (req.body.email === credential.email && req.body.password === credential.password) {
        req.session.user = req.body.email;
        res.render("dashboard");
        // res.end("Login Successful");
    } else {
        res.end("Invalide Username");
    }
});

// router for dashbord
router.get("/dashboard", (req, res) => {
    if (req.session.user) {
        res.render("dashboard", { user: req.session.user });
    } else {
        res.send("Unauthorize User");
    }
});


module.exports = router;