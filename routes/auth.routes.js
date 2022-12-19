const { Router } = require('express');
const { createUser, loginUser, renewToken } = require('../controllers/auth.controller');
const { check } = require('express-validator');

const router = Router();

// Login of user
router.post('/', [
    check('email', 'El email es obligatorio').isEmail(), 
], loginUser); // 'path', middleware, controller 

// JWT
router.get('/renew', renewToken);

// Create new user 
router.post('/new', createUser);

module.exports = router;