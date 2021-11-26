const express = require('express');
const router = express.Router();
const { protect, admin } = require('../middlware/authMiddlware.js');
const {
    authUser,
    registerUser
} = require('../controllers/userControllers');

router.post('/', registerUser);
router.post('/login', authUser);

module.exports = router;
