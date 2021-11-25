const express = require('express');
const router = express.Router();
const { protect, admin } = require('../middlware/authMiddlware.js');
const {
    registerUser
} = require('../controllers/userControllers');

router.post('/', registerUser);

module.exports = router;
