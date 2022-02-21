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
        const libManage = await libraryManagement.findById({});
        res.send(libManage);
    } catch(error) {
        res.json({message: error});
    }
};
const libraryCreate = async (req, res) => {
    const library = new libraryManagement({
        studentName: req.body.studName,
        bookName: req.body.bookName,
        issueDate: req.body.Date,
        charges: req.body.charges
    })
    try{
        const libManage = await library.save();
        res.send(libManage);
    } catch(error) {
        res.status(400).json({message: error});
    }
};
const libraryUpdate = async (req, res) => {};
const libraryDelete = async (req, res) => {};



module.exports = {
    libraryData,
    libraryDetails,
    libraryCreate,
    libraryUpdate,
    libraryDelete
}