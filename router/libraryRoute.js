const express = require("express");
const router = express.Router();

const {libController} = require("../controller")

router.post("/add", libController.libraryCreate);
router.get("/", libController.libraryData);
router.get("/:id", libController.libraryDetails);
router.put("/update/:id",libController.libraryUpdate);
router.delete("/delete/:id", libController.libraryDelete);

module.exports = router;