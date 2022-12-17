const { Router } = require('express');
const { createUser, loginUser, renewToken } = require('../controllers/auth')

const router = Router();

// Login of user
router.post('/', loginUser);

// JWT
router.get('/renew', renewToken);

// Create new user 
router.post('/new', createUser);

module.exports = router;