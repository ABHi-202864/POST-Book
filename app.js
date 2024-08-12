const express = require("express");
const app = express();
const path = require("path");
const ejsMate = require("ejs-mate");
const bodyparser = require("body-parser");
const session = require("express-session");
const { v4: uuidv4 } = require('uuid');
// Express Routes <- require
const login = require("./routes/user");


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyparser.urlencoded({ extended: true }));
// app.use(express.urlencoded({ extended: true }));


// for session
const sessionOptions = {
    secret: uuidv4(),
    resave: false,
    saveUninitialized: true,
}
app.use(session(sessionOptions));



// Express Router
app.use("/user", login);


// Home route
app.get("/", (req, res) => {
    res.render("signup", { title: "PostBook" });
});





app.listen(8080, () => {
    console.log("Doking Port = 8080");
});