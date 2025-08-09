const mongoose = require("mongoose");

const enrollmentScheme = mongoose.Schema({
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  enrolledAt: {
    type: Date,
    required: true,
  },
  progress: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

const Enrollments = new mongoose.model("Enrollment", enrollmentScheme);

module.exports = Enrollments;
