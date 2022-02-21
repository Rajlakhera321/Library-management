const{ libraryManagement} = require("../model");
const constants = require("../constant/constant")
const {succussHandler,errorHandler} = require("../helper/responseHandler");

const libraryData = async (req, res ) => {
    try{
        const libManage = await libraryManagement.find({});
        return succussHandler(res,constantAll.OK,constantAll.GET_MESSAGE,libManage);
    } catch(error) {
        return errorHandler(res,constantAll.NOT_FOUND,constantAll.RECORD_NOT_FOUND);
    }
};
const libraryDetails = async (req, res) => {
    try{
        const libManage = await libraryManagement.findById(req.params.id);
        return succussHandler(res,constantAll.OK,constantAll.GET_MESSAGE,libManage)
    } catch(error) {
        return errorHandler(res,constantAll.NOT_FOUND,constantAll.RECORD_NOT_FOUND);
    }
};
const libraryCreate = async (req, res) => {
    const library = {
        studentName: req.body.studentName,
        bookName: req.body.bookName,
        issueDate: req.body.issueDate,
        charges: req.body.charges
    }
    try{
        const add = await new libraryManagement(library)
        await add.save();
        return succussHandler(res,constants.CREATED,constants.CREATE_SUCCESS)
    } catch(error) {
        return errorHandler(res,constants.SERVER_ERROR,constants.SERVER_ERROR_MSG)
    }
};
const libraryUpdate = async (req, res) => {
    try{
        const _id = req.params.id
        const update = await libraryManagement.findByIdAndUpdate(_id,{$set:req.body},{upsert:true, new:true});
        return succussHandler(res,constantAll.OK,constantAll.UPDATE_SUCCESS,update)
    } catch(error){
        return errorHandler(res,constantAll.SERVER_ERROR,constantAll.SERVER_ERROR_MSG)
    }
};
const libraryDelete = async (req, res) => {
    try{
        const _id = req.params.id
        const removedData = await libraryManagement.findByIdAndDelete({_id: _id});
        return succussHandler(res,constantAll.OK,constantAll.DELETE_MSG,removedData)
    } catch(error){
        return errorHandler(res,constantAll.SERVER_ERROR,constantAll.SERVER_ERROR_MSG)
    }
};



module.exports = {
    libraryData,
    libraryDetails,
    libraryCreate,
    libraryUpdate,
    libraryDelete
}