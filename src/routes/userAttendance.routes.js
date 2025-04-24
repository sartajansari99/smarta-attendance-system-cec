const express = require('express');
const router = express.Router();
const {markAttendance} = require('../controllers/rfidLogic.controllers');

router.post('/attendance', markAttendance);



module.exports = router;
