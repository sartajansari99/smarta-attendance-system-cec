// controllers/attendanceController.js

const Attendance = require('../models/attendence.models'); // Update the path if needed

// Get total attendance count grouped by subject
const getAttendanceCountBySubject = async (req, res) => {
    try {
        const result = await Attendance.aggregate([
          {
            $group: {
              _id: "$subject",
              totalAttendance: { $sum: 1 }
            }
          },
          {
            $lookup: {
              from: "subjects", // ⚠ collection name (must match MongoDB, lowercase plural)
              localField: "_id",
              foreignField: "_id",
              as: "subjectDetails"
            }
          },
          {
            $unwind: "$subjectDetails"
          },
          {
            $project: {
              subjectId: "$_id",
              subjectName: "$subjectDetails.name", // or "title" or whatever your field is
              totalAttendance: 1,
              _id: 0
            }
          }
        ]);
    
        res.status(200).json(result);
      } catch (error) {
        console.error("Error fetching attendance count:", error);
        res.status(500).json({ message: "Server Error" });
      }
};

module.exports = { getAttendanceCountBySubject };
