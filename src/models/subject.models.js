const mongoose=require('mongoose')
const subjectSchema = new mongoose.Schema({
    name: String,
    code: String,
    semester: {
        type: Number, // ✅ correct
        required: true
      },
    startTime: String, // e.g., "09:30"
    endTime: String,   // e.g., "10:30"
    day: String,       // e.g., "Monday"
  });
  
  module.exports = mongoose.model('Subject', subjectSchema);
  