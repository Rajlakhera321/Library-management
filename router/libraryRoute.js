const express = require("express");
const router = express.Router();

const {signUpValidator,valid} = require("../validation")
const {libController} = require("../controller")
const {auth} = require('../middlevere')

router.post("/add",signUpValidator.signUpValidation(),valid.validate, libController.libraryCreate);
router.get("/", libController.libraryData);
router.get("/:id", libController.libraryDetails);
router.put("/update/:id",libController.libraryUpdate);
router.delete("/delete/:id", libController.libraryDelete);
router.post("/login", libController.userLogin, auth.verifyToken);

module.exports = router;