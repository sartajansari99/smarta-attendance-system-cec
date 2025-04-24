const express = require('express');
const router = express.Router();
const { registerUser, loginUser ,chat} = require('../controllers/user.controllers');
const upload=require('../utils/multer')

router.post('/register',upload.single('photo'), registerUser);
router.post('/login', loginUser);
router.get('/message', chat);

module.exports = router;
