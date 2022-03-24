/**
 * @author: istiklal
 * 
 */
const env = require("../configurations");
const Logger = require("../services/logger/logger");
const logger = new Logger("homeRoutes");

const path = require("path");

const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {

    var context = {
            title: "ALISA HOMEPAGE",
            confTexts: env.CONFIGURE_SCREEN_EXPLANATIONS,
            monTexts: env.MONITOR_SCREEN_EXPLANATIONS,
            tracingApps: env.TRACING_APPS
        }
        res.render("index", context);
});

router.use((req, res, next) => {
    // handler for non existing urls
    res.status(404).render("404", {title:"NOT FOUND", content:`No way to ${req.path}`});
})


module.exports = router;