const { Router } = require('express');
const { createUser, loginUser, renewToken } = require('../controllers/auth.controller');
const { check } = require('express-validator');
const { validateJWT } = require('../middlewares/validate-jwt');

const router = Router();

// Login of user
// 'path', middleware, controller 
router.post('/', [
    check('email', 'El email es obligatorio').isEmail(), 
    check('password', 'El password es obligatorio y minimo 6 caracteres').isLength({ min: 6}), 
], loginUser); 
    
// JWT
router.get('/renew', validateJWT ,renewToken);

// Create new user 
router.post('/new', 
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(), 
    check('password', 'El password es obligatorio y minimo 6 caracteres').isLength({ min: 6})
,createUser);

module.exports = router;