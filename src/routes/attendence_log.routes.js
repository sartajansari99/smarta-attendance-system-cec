const express = require('express');
const router = express.Router();
const {Attendence_log} = require('../controllers/attendence_log.controller');

router.get('/attendance_log', Attendence_log);

module.exports = router;
