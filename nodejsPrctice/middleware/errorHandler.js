const logEvents = require('./logEvents')


const errorHandler = function (err, req, res, next) {
    logEvents.logEvents(`${err.name}: ${err.message}`, 'errLog.txt')
    console.error(err.stack)
    return res.status(500).send(err.message);
}

module.exports = { errorHandler };