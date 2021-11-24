const express = require('express');
const router = express.Router();
const { protect, admin } = require('../middlware/authMiddlware.js');
const {
    authUser,
    registerUser,
    getUsers,
    getUserById
} = require('../controllers/userControllers');

router.post('/', registerUser);

module.exports = router;
