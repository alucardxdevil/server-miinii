const { Router } = require('express');
const { check } = require('express-validator');
const { createUser, login, renewToken } = require('../controllers/auth');
const { validate } = require('../middlewares/validate');
const { validateJWT } = require('../middlewares/validate-jwt');

const router = Router();

router.post('/new', [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Email incorrect').isEmail(),
    check('password', 'Password must be at least 6 characters').isLength({ min: 6 }).not().isEmpty(),
    validate
], createUser);

router.post('/', [
    check('email', 'Email incorrect').isEmail(),
    check('password', 'Password must be at least 6 characters').isLength({ min: 6 }).not().isEmpty(),
], login);

router.get('/renew', validateJWT, renewToken);



module.exports = router;