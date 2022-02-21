const succussHandler = (res, statusCode, message, result) => {
    res.status(statusCode).json({message,result});
}
const errorHandler = (res, statusCode, message, result) => {
    res.status(statusCode).json({message,result});
}

module.exports = {
    succussHandler,
    errorHandler
}