const express = require('express');
const router = express.Router();
const { createSubject,getAllSubjects,updateSubject,deleteSubject } = require('../controllers/subject.controllers');

router.post('/subjectcreate', createSubject);
router.get('/getallSubject', getAllSubjects);
router.put('/updateSubject/:id', updateSubject);
router.delete('/deleteSubject/:id', deleteSubject);

module.exports = router;