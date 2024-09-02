const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.set("views", path.join(__dirname,"view"));

app.use(express.static(path.join(__dirname, "public")));



app.get("/simon_says", (req, res) =>{
    res.render("ind.ejs");
    // res.send("server working");
});

app.post("/simon_says", (req, res) =>{
    res.redirect("/simon_says");
    // res.send("server working");
});

app.get("/simon_says/start", (req, res) =>{
    res.render("game.ejs");
});

app.post("/simon_says/start", (req, res) =>{
    res.redirect("/simon_says/start");
});

app.listen(port, ()=>{
    console.log("listen to port : 8080");
});
