const Subject = require('../models/subject.models'); // Adjust path if needed

// @desc    Add new subject
// @route   POST /api/subjects
// @access  Public or Protected (based on your setup)
const createSubject = async (req, res) => {
  try {
    const { name, code, semester, startTime, endTime, day } = req.body;

    // Basic validation
    if (!name|| !code || !semester || !startTime || !endTime || !day) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    const newSubject = new Subject({
      name,
      code,
      semester,
      startTime,
      endTime,
      day,
    });

    const savedSubject = await newSubject.save();
    res.status(201).json({
      message: 'Subject saved successfully',
      subject: savedSubject,
    });
  } catch (err) {
    console.error('Error saving subject:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

const getAllSubjects = async (req, res) => {
  try {
    const subjects = await Subject.find();
    res.status(200).json(subjects);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch subjects', error });
  }
};

const updateSubject = async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  try {
    const subject = await Subject.findByIdAndUpdate(id, updatedData, { new: true });
    if (!subject) {
      return res.status(404).json({ message: 'Subject not found' });
    }
    res.status(200).json({ message: 'Subject updated', subject });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update subject', error });
  }
};

const deleteSubject = async (req, res) => {
  const { id } = req.params;

  try {
    const subject = await Subject.findByIdAndDelete(id);
    if (!subject) {
      return res.status(404).json({ message: 'Subject not found' });
    }
    res.status(200).json({ message: 'Subject deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete subject', error });
  }
};

module.exports = {
  createSubject,getAllSubjects,updateSubject,deleteSubject
};