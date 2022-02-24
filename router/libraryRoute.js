const express = require("express");
const router = express.Router();
const checkAuth = require("../middlevere/auth")

const {libController} = require("../controller")
const {signUpValidator,valid} = require("../validation")

router.post("/add",checkAuth,signUpValidator.signUpValidation(),valid.validate, libController.libraryCreate);
router.get("/", libController.libraryData);
router.get("/:id", libController.libraryDetails);
router.put("/update/:id",libController.libraryUpdate);
router.delete("/delete/:id", libController.libraryDelete);
router.post("/userLogin", libController.userLogin);

module.exports = router;