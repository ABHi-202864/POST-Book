const express = require("express");
const app = express();
const path = require("path");
const ejsMate = require("ejs-mate");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "public")));

// home route
app.get("/", (req, res) => {
    res.render("index", { title: "POST-Book" });
});



app.listen(8080, () => {
    console.log("Doking Port- 8080");
});