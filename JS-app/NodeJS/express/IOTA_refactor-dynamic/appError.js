class AppError extends Error {
    constructor(msg, statusCode) {
        super();
        this.message = msg;
        this.satus = statusCode;
    }
}

module.exports = AppError;