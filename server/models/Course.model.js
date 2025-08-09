const mongoose = require("mongoose");

const courseScheme = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    default: 0,
  },
  tutorId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
});

const Course = new mongoose.model("Course", courseScheme);

module.exports = Course;
