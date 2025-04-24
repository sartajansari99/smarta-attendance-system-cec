// routes/attendanceRoutes.js

const express = require('express');
const router = express.Router();
const { getAttendanceCountBySubject  } = require('../controllers/getTotal_attendence.controller');

router.get('/attendance_by_subject', getAttendanceCountBySubject );

module.exports = router;
