/**
 * @author : istiklal
 * configurational static settings of whole ui moldule
 */
const path = require("path");


module.exports.IN_PRODUCTION = false;
module.exports.PORT = 3000;
//module.exports.LOG_FILE = "/Users/btk/Desktop/istiklal/ProjectAlisa/alisa/Logs/alisa-ui-logs.log";
module.exports.LOG_FILE = path.join(__dirname, "../", "Logs", "alisa-ui-logs.log");
//module.exports.LOG_FILE = "";
module.exports.STREAM_LOGGING_LEVEL = 10;
module.exports.FILE_LOGGING_LEVEL = 10;



// String lists to show main screen as explanations for configure and monitor parts
module.exports.CONFIGURE_SCREEN_EXPLANATIONS = [
    "Basic configuration and initialization process",
    "###"
]
module.exports.MONITOR_SCREEN_EXPLANATIONS = [
    "Monitor what happened",
    "###"
]
module.exports.TRACING_APPS = [
    "istiklal", "Kutay", "Cenk"
]