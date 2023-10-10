const {constants} = require("../constants");
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({ title: " validation failed", message: err.message, stackTrace: err.stack });
            break;
        case constants.NOT_FOUND:
            res.json({ title: "Not found", message: err.message, stackTrace: err.stack });
        case constants.UNAUTHORIZED:
                res.json({ title: "Un-Authorized!", message: err.message, stackTrace: err.stack });
        case constants.SERVER_ERROR:
            res.json({ title: "Server Error!", message: err.message, stackTrace: err.stack });
        default:
            console.log("no error all fine!")
            break;
    }
};

module.exports = errorHandler;