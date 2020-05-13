const express = require('express');
const authCtrl = require('./auth.controller');
const authenticate = require('../middlewares/authentication');

const router = express.Router(); // eslint-disable-line new-cap

/** GET /api/auth/user - Protected route,
 * needs token returned by the above as header. Authorization: Bearer {token} */
router.route('/user').get(authenticate, authCtrl.getUser);

module.exports = router;
