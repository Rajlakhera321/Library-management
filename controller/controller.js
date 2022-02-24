const{ libraryManagement} = require("../model");
const constants = require("../constant/constant")
const {succussHandler,errorHandler} = require("../helper/responseHandler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

const libraryData = async (req, res ) => {
    try{
        const libManage = await libraryManagement.find({});
        return succussHandler(res,constants.OK,constants.GET_MESSAGE,libManage);
    } catch(error) {
        return errorHandler(res,constants.NOT_FOUND,constants.RECORD_NOT_FOUND);
    }
};
const libraryDetails = async (req, res) => {
    try{
        const libManage = await libraryManagement.findById(req.params.id);
        return succussHandler(res,constants.OK,constants.GET_MESSAGE,libManage)
    } catch(error) {
        return errorHandler(res,constants.NOT_FOUND,constants.RECORD_NOT_FOUND);
    }
};
const libraryCreate = async (req, res) => {
    try{
        req.body.password = await bcrypt.hash(req.body.password, 10)
        const library = {
            studentName: req.body.studentName,
            bookName: req.body.bookName,
            issueDate: req.body.issueDate,
            charges: req.body.charges,
            password: req.body.password,
            email: req.body.email
        }
        console.log(req.body.password)
        const add = await new libraryManagement(library)
        await add.save();
        return succussHandler(res,constants.CREATED,constants.CREATE_SUCCESS)
    } catch(error) {
        console.log(error);
        return errorHandler(res,constants.SERVER_ERROR,constants.SERVER_ERROR_MSG)
    }
};
const libraryUpdate = async (req, res) => {
    try{
        
        const _id = req.params.id
        const update = await libraryManagement.findByIdAndUpdate(_id,{$set:req.body},{upsert:true, new:true});
        return succussHandler(res,constants.OK,constants.UPDATE_SUCCESS,update)
    } catch(error){
        return errorHandler(res,constants.SERVER_ERROR,constants.SERVER_ERROR_MSG)
    }
};
const libraryDelete = async (req, res) => {
    try{
        const _id = req.params.id
        const removedData = await libraryManagement.findByIdAndDelete({_id: _id});
        return succussHandler(res,constants.OK,constants.DELETE_MSG,removedData)
    } catch(error){
        return errorHandler(res,constants.SERVER_ERROR,constants.SERVER_ERROR_MSG)
    }
};

const userLogin = async ( req, res ) => {
    
    var email = req.body.email;
    var password = req.body.password;

    libraryManagement.find({email: email })
    .exec()
    .then(user => {
        if(user.length<1){
            res.status(404).json({
                message: "user not exist"
            })
        }else{
            bcrypt.compare(password, user[0].password, function(err, result){
                if(err){
                    res.status(404).json({
                        message: "auth failed",
                    });
                }
                if(result == true){
                    var token = jwt.sign({
                        email: user[0].email,
                        studentName: user[0].studentName
                    },
                    'secret',{
                        expiresIn: "1h"
                    }
                    );
                    res.status(200).json({
                        message: "user Found",
                        token: token
                    });
                }else{
                    res.status(404).json({
                        message: "user not exist",
                    });
                }
            });
    }
    })
    .catch(err => {
        res.json({
            error: err
        })
    })
}
module.exports = {
    libraryData,
    libraryDetails,
    libraryCreate,
    libraryUpdate,
    libraryDelete,
    userLogin
}