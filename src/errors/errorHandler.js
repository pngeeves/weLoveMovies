

function errorHandler(error, req, res, next){
    const {status = 500, message = "Something went wrong!" } = error
    console.log(error)
    res.status(status).json({ error: message })
}

module.exports = errorHandler