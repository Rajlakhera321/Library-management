const jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
    try{
        const token = req.body.token.split(" ")[1];
        console.log(token);
        next();
    }catch{
        res.status(401).json({
            error: "invalid token"
        })
    }
    
}