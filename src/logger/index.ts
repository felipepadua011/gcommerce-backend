const {format, createLogger, transports } = require('winston');

const logFormat = format.printf(({ level, message, timestamp}) => {
    return `${timestamp} ${level}: ${message}`
})

const log = createLogger({
    // level: "debug",
    format: format.combine(
        format.colorize(),
        format.timestamp({format: 'YYYY-MMM-DD HH:mm:ss'}),logFormat),
    transports: [new transports.Console()]
});

module.exports = log;