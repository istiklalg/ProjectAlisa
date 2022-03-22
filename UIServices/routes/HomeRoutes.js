/**
 * @author: istiklal
 * 
 */
const Logger = require("../services/logger/logger");
const logger = new Logger("homeRoutes");

const path = require("path");

const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
//router.use("/", (req, res, next) => {
    // homepage of alisa
    //res.sendFile(path.join(__dirname, "../", "templates", "index.html"));
    //res.send("<h1 align='center'>Welcome to ALISA</h1>");

    var context = {
        title: "ALISA HOMEPAGE"
    }
    res.render("index", context);
});


module.exports = router;