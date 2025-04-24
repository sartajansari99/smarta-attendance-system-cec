const express = require('express');
const router = express.Router();
const {getAllUsers,getUserById} = require('../controllers/getusers.controller');

router.get('/getalluser', getAllUsers);
router.get('/getuserbyid', getUserById);



module.exports = router;
