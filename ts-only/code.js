"use strict";
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["DEBUG"] = 0] = "DEBUG";
    LogLevel[LogLevel["INFO"] = 1] = "INFO";
    LogLevel[LogLevel["WARN"] = 2] = "WARN";
    LogLevel[LogLevel["ERROR"] = 3] = "ERROR";
})(LogLevel || (LogLevel = {}));
;
function log(opts) {
    if (opts.level >= opts.globalLogLevel) {
        console.log(opts.message);
    }
}
log({
    globalLogLevel: LogLevel.INFO,
    level: LogLevel.INFO,
    message: "Hello!",
});
log({
    globalLogLevel: LogLevel.INFO,
    level: LogLevel.DEBUG,
    message: "Hello!",
});
log({
    globalLogLevel: LogLevel.INFO,
    // @ts-expect-error
    level: 123,
    message: "Hello!",
});
