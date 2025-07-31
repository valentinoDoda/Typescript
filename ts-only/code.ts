enum LogLevel  {
  DEBUG,
  INFO,
  WARN,
  ERROR
};

function log(opts: { globalLogLevel: number; level: number; message: string }) {
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