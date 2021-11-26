const asyncHandler = require('express-async-handler');
const generateToken = require('../utils/generateToken');
const User = require('../models/userModel');

const registerUser = asyncHandler(async (req, res) => {
    const { name, lastname, username, email, dateofbirth, mobilenumber, mobilecode, password, terms, confirm_password } = req.body;

    const dateOfBirth = dateofbirth.split('/').reverse();
    const age = _calculateAge(new Date(dateOfBirth[0], dateOfBirth[1], dateOfBirth[2]));
    const emailExists = await User.findOne({ email });
    const usernameExists = await User.findOne({ username });

    if (emailExists) {
        res.json({ status: 400, errorMessage: 'Email already taken' });
        // throw new Error('Email already taken');
    } else if (age < 18) {
        res.json({ status: 400, errorMessage: '18+' });
        // throw new Error('Email already taken');
    } else if (usernameExists) {
        res.json({ status: 400, errorMessage: 'Username already taken' });
        // throw new Error('Username already taken');
    } else if (password !== confirm_password) {
        res.json({ status: 400, errorMessage: "Password don't match !" });
    } else if (!terms) {
        res.json({ status: 400, errorMessage: "Accept terms required!" });
    }

    const user = await User.create({
        name,
        lastname,
        username,
        email,
        dateofbirth,
        mobilenumber,
        mobilecode,
        password,
        terms
    });

    if(user) {
        res.json({
            token: generateToken(user._id)
        })
    } else {
        res.status(404);
        throw new Error('User not found');
    }
})

module.exports = {
    registerUser
};


function _calculateAge(birthday) {
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// console.log(_calculateAge(new Date(1995, 02, 01)));