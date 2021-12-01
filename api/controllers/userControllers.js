const asyncHandler = require('express-async-handler');
const generateToken = require('../utils/generateToken');
const User = require('../models/userModel');

const registerUser = asyncHandler(async (req, res) => {
    const { id, name, lastname, username, email, dateofbirth, mobilenumber, mobilecode, password, confirm_password } = req.body;

    const dateOfBirth = dateofbirth.split('/').reverse();
    const age = _calculateAge(new Date(dateOfBirth[0], dateOfBirth[2], dateOfBirth[1]));
    const emailExists = await User.findOne({ email });
    const usernameExists = await User.findOne({ username });
    const idExists = await User.findOne({ id });
    
    if (emailExists) {
        res.json({ status: 400, errorMessage: 'Email already taken' });
        throw new Error('Email already taken');
    } else if (idExists) {
        res.json({ status: 400, errorMessage: 'Id number already taken' });
        throw new Error('Email already taken');
    } else if (age < 18) {
        res.json({ status: 400, errorMessage: '18+' });
        throw new Error('Email already taken');
    } else if (usernameExists) {
        res.json({ status: 400, errorMessage: 'Username already taken' });
        throw new Error('Username already taken');
    } else if (password !== confirm_password) {
        res.json({ status: 400, errorMessage: "Password don't match !" });
    } 

    const user = await User.create({
        id,
        name,
        lastname,
        username,
        email,
        dateofbirth,
        mobilenumber,
        mobilecode,
        password,
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


const authUser = asyncHandler(async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            username: user.username,
            token: generateToken(user._id),
        })
    }else {
        res.json({ status: 401, errorMessage: "Password or username don't match!" });
        throw new Error('Invalid username or password')
    }
})

const getUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    if (user) {
        res.json({
            _id: user._id,
            name: user.name,
            lastname: user.lastname,
            personalId: user.id,
            username: user.name,
            email: user.email,
            dateofbirth: user.dateofbirth,
            mobilecode: user.mobilecode,
            mobilenumber: user.mobilenumber,
        })
    }else {
        res.status(404);
        throw new Error('User not found!');
    }
})


module.exports = {
    authUser,
    registerUser,
    getUserProfile
};


function _calculateAge(birthday) {
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}