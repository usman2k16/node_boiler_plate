const {customError} = require('../errors/customError');

const errorHandler = (err,req,res,next) =>{
    if(err instanceof customError)
    {
        return res.status(err.statusCode).json({ status: 'failed',msg: err.message });
    }
    return res.status(500).json({ status: 'failed',msg: 'An Internal error occured. Please try again later' });
}

module.exports = errorHandler;