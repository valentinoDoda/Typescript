"use strict";
const LogLevel = {
    DEBUG: 0,
    INFO: 1,
    WARN: 2,
    ERROR: 3,
};
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
