import Config from "react-native-config";


function isLogEnabled() {
    return Config.LOG_ENABLED && Config.LOG_ENABLED.trim() === "true";
}

global.LogTracker = function (...objects) {
};

global.LogTracker.debug = function (...objects) {
    if (isLogEnabled()) {
        console.debug(objects);
    }
};

global.LogTracker.info = function (...objects) {
    if (isLogEnabled()) {
        console.info(objects);
    }
};

global.LogTracker.warn = function (...objects) {
    if (isLogEnabled()) {
        console.warn(objects);
    }
};

global.LogTracker.log = function (...objects) {
    if (isLogEnabled()) {
        console.log(objects);
    }
};
