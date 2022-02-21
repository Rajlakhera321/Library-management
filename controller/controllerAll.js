const{ libraryManagement} = require("../model");

const libraryData = async (req, res) => {
    try{
        const libManage = await libraryManagement.find({});
        res.send(libManage);
    } catch(error) {
        res.json({message: error});
    }
};
const libraryDetails = async (req, res) => {
    try{
        const libManage = await libraryManagement.findById(req.params.id);
        res.send(libManage);
    } catch(error) {
        res.json({message: error});
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
        res.status(201).json({message: "successfully created"});
    } catch(error) {
        res.status(400).json({message: error});
    }
};
const libraryUpdate = async (req, res) => {
    try{
        const _id = req.params.id
        const update = await libraryManagement.findByIdAndUpdate(_id,{$set:req.body},{upsert:true, new:true});
        res.json({message: "successfully update", update})
    } catch(error){
        res.status(404).josn({message: error})
    }
};
const libraryDelete = async (req, res) => {
    try{
        const _id = req.params.id
        const removedData = await libraryManagement.findByIdAndDelete({_id: _id});
        res.status(201).json({message: "successfully delete"});
    } catch(error){
        res.json({message:error})
    }
};



module.exports = {
    libraryData,
    libraryDetails,
    libraryCreate,
    libraryUpdate,
    libraryDelete
}