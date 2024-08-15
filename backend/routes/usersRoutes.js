const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware')
const { registrarUser, loginUser, dataUser } = require('../controllers/usersControllers');

router.post('/registrar', registrarUser);
router.post('/login', loginUser);
router.get('/data', protect, dataUser);

module.exports = router