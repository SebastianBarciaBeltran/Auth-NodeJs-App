const { Router } = require('express');

const router = Router();

// Login of user
router.post('/', (request, response) => { 

    return response.json({
        ok: true,
        msg: 'Logged'
    })

});

// JWT
router.get('/renew', (request, response) => { 

    return response.json({
        ok: true,
        msg: 'JWT'
    })

});

// Create new user
router.post('/new', (request, response) => { 

    return response.json({
        ok: true,
        msg: 'create user /new'
    })

});

module.exports = router;