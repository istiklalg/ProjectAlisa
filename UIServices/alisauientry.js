/**
 * @author : istiklal
 * root file and entry point of whole UI module
 * @urlstructure : 
 */

const env = require("./configurations");
const Logger = require("./services/logger/logger");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
var cors = require("cors");
const configurationRoutes = require("./routes/ConfigurationRoutes");
const monitoringRoutes = require("./routes/MonitoringRoutes");
const homeRoutes = require("./routes/HomeRoutes");

const alisaApp = express();
const logger = new Logger("main");

alisaApp.set("view engine", "pug");
alisaApp.set("views", "./templates");

alisaApp.use(cors());
alisaApp.use(express.urlencoded({ extended: false }));
alisaApp.use(express.json());
alisaApp.use(express.static(path.join(__dirname, "./static")));
alisaApp.use(bodyParser.urlencoded({ extended: false }));

alisaApp.use("*", (req, res, next) => {
    // logging process ...
    const query = req.query;
    logger.info(`${req.method} request   URL : ${req.baseUrl} & PATH : ${req.pathname} & QUERY : ${req.query}`, "firstResponder");
    console.log(`${req.method} request   URL : `, req.baseUrl, ` & QUERY : `, query);
    //console.log(`full request details : `, req);
    //console.log(`request body : `, req.body);
    next();
});
// handler middleware for url "/configure"
alisaApp.use("/configure", configurationRoutes);
// handler middleware for url "/monitor"
alisaApp.use("/monitor", monitoringRoutes);
// handler middleware for url "/" HOMEPAGE
alisaApp.use("/", homeRoutes);


alisaApp.listen(env.PORT, () => {
    logger.info(`alisa started with \x1b[36m${env.IN_PRODUCTION?"production":"development"}\x1b[0m settings & listen on port : \x1b[36m${env.PORT}\x1b[0m`, "listener");
    //logger.info(`alisa started with ${env.IN_PRODUCTION?"production":"development"} settings & listen on port : ${env.PORT}`, "listener");
});