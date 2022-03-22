/**
 * @author: istiklal
 * 
 */
const Logger = require("../services/logger/logger");
const logger = new Logger("configurationRoutes");

const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
//router.get("/configure", (req, res, next) => {

    var context = {
        title: "ALISA CONFIGURATION"
    }
    res.render("configure", context);
});



router.post("/", (req, res, next) => {
//router.post("/configure", (req, res, next) => {
    console.log(`${req.method} request BODY : `, req.body);
    res.send("<h1 align='center'>Configuration saved</h1>");
});


module.exports = router;