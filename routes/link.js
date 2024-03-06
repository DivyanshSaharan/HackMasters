const express = require("express");
const router = express.Router();

router.get("/link", (req, res) => {
    res.render("auth/signup");
});