const express = require("express");
const router = express.Router();

const {libController} = require("../controller")

router.post("/create", libController.libraryCreate);
router.get("/", libController.libraryData);
router.get("/:id", libController.libraryDetails);
router.put("/");
router.delete("/");

module.exports = router;