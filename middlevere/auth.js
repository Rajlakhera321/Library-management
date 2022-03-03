const jwt = require("jsonwebtoken");
const verifyToken = (req, res, next) => {
    try{
        const token = req.headers.authorization.split(" ")[1];
        const decode = jwt.verify(token, 'secret');
        req.userData = decode;
        next();
    } catch{
        res.status(401).json({
            error: "Invalid Token"
        })
    }
}

module.exports = {verifyToken}