var winston = require('winston'),
    fs = require('fs'),
    underscore = require('underscore'),
    path = require('path')
    ;

winston.emitErrs = true;

var logDir = path.join(rootUrl, '/logs');
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}

var levels = underscore.clone(winston.config.syslog.levels),
    colors = underscore.clone(winston.config.syslog.colors);

levels.request = underscore.max(levels) + 1;
colors.request = 'blue';


module.exports = {
    errorLog: new winston.Logger({
        levels: levels,
        colors: colors,
        exceptionHandlers: [
            new winston.transports.File({filename: path.join(rootUrl, '/logs/', 'exceptions.log')})
        ],
        transports: [

            new winston.transports.File({
                name: 'error-file',
                level: 'error',
                filename: path.join(rootUrl, '/logs/', 'error-logs.log'),
                json: false,
                maxsize: 5242880, //5MB
                maxFiles: 5,
                colorize: false,
            })
        ],
        exitOnError: false
    }),
    requestLog: new winston.Logger({
            levels: levels,
            colors: colors,
            exceptionHandlers: [
                new winston.transports.File({filename: path.join(rootUrl, '/logs/', 'exceptions.log')})
            ],
            transports: [
                new winston.transports.File({
                    name: 'request-file',
                    level: 'request',
                    filename: path.join(rootUrl, '/logs/', 'request-logs.log'),
                    json: true,
                    maxsize: 5242880, //5MB
                    maxFiles: 5,
                    colorize: false
                })
            ],
            exitOnError: false
        }
    ),

    infoLog: new winston.Logger({
        levels: levels,
        colors: colors,
        exceptionHandlers: [
            new winston.transports.File({filename: path.join(rootUrl, '/logs/', 'exceptions.log')})
        ],
        transports: [
            new winston.transports.File({
                name: 'info-file',
                level: 'info',
                filename: path.join(rootUrl, '/logs/', 'all-logs.log'),
                json: true,
                maxsize: 5242880, //5MB
                maxFiles: 5,
                colorize: false
            })
        ],
        exitOnError: false
    })
};

