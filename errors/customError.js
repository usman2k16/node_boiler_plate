
class customError extends Error {
    constructor(statusCode,message) {
        super(message);
        this.statusCode = statusCode;
    }
}

const createCustomError = (status,msg) => {
    return new customError(status,msg)
}

module.exports = { createCustomError, customError };