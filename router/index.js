const express = require('express');
const router = express.Router();

router.use('/library', require("./libraryRoute"));

module.exports = router