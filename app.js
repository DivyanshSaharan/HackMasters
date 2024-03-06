const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
// const seedDB = require("./seed");
const methodOverride = require("method-override");
const session = require("express-session");
const flash = require("connect-flash");
// const productRoutes = require("./routes/productRoutes");
// const reviewRoutes = require("./routes/review");
// const authRoutes = require("./routes/auth");
// const cartRoutes = require("./routes/cart");
// const productApi = require("./routes/api/productapi"); //api
// const passport = require("passport"); //pass
// const LocalStrategy = require("passport-local"); //pass
// const User = require("./models/User"); //pass
const dotenv=require('dotenv').config() 

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
// now for public folder

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

let configSession = {
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    },
  };
  
app.use(session(configSession));
app.use(flash());

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/home",(req,res)=>{
  res.render("home");
})
app.post("/home", (req, res) => {
  let {Link}=req.body;
  res.render("link",{Link});
  // console.log(Link);
});
// app.use(linkRoutes);
app.listen(process.env.PORT, () => {
    console.log(`server connected at port : ${process.env.PORT}`);
});