/**
 * @author: istiklal
 * 
 */

const Logger = require("../services/logger/logger");
const logger = new Logger("monitoringRoutes");

const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
//router.use("/monitor", (req, res, next) => {
    //res.send("<h1 align='center'>Monitoring part</h1>");

    var context = {
        title: "ALISA MONITORING"
    }
    res.render("monitor", context)
});


module.exports = router;