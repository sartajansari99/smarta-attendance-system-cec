const dotenv = require("dotenv");
dotenv.config();
const path =require('path')
const express = require("express");
const cors = require("cors");
const app = express();

const connectDB = require("./src/db/connect");

const PORT = process.env.PORT || 5000;

const userRoutes = require('./src/routes/user.routes');
const userAttendance = require('./src/routes/userAttendance.routes');
const userSubject = require('./src/routes/subject.routes');
const userAttendanceRoute = require('./src/routes/attendence_log.routes');
const userFetchRoute=require('./src/routes/getusers.routes')
const userTotalAttendence=require('./src/routes/total_Attendence_Count.routes')

// Middleware
// Increase body size limit
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(cors()); // 👉 Enables CORS for all origins
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

// Routes
app.use('/api/users', userRoutes);
app.use('/api/userAttendance', userAttendance);
app.use('/api/userSubject', userSubject);
app.use('/api/userAttendance_log', userAttendanceRoute);
app.use('/api/getuser', userFetchRoute);
app.use('/api/total_attendence', userTotalAttendence);

// Default Route
app.get('/', (req, res) => {
  res.status(200).json({ message: "hello sartaj" });
});

// Start Server
connectDB();
app.listen(PORT, () => {
  console.log('Server is running on', PORT);
});
