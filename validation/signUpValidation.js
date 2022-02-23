const {body} = require("express-validator");
const {libraryManagement} = require("../model");

const signUpValidation = () =>{
    return [
        body("studentName").not().notEmpty().withMessage("Please Enter Student Name").isLength({max:20}).withMessage("You have entered more than 20 characters"),
        body("email").not().notEmpty().withMessage("please Enter email").isEmail().withMessage("email should be email type")
        .custom(value => {
            return libraryManagement.findOne({email: value}).then(data => {
                if(data){
                    return Promise.reject("Email is already exist");
                }
            })
        }),
        body("bookName").not().notEmpty().withMessage("Please Enter your book name"),
        body("issueDate").not().notEmpty().withMessage("Please Enter book issueDate name"),
        body("charges").not().notEmpty().withMessage("Please Enter book charges"),
        body("password").not().notEmpty().withMessage("Please Enter Your Password").isLength({min: 8})
        .withMessage("Please Enter atleast 8 characters")
    ]
}

module.exports = {signUpValidation}