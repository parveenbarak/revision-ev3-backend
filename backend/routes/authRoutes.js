const express = require('express');
const authrouter = express.Router();
const { register, login } = require('../controllers/authController');
authrouter.post('/signup', register);
authrouter.post('/login', login);
module.exports = authrouter;
