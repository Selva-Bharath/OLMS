const express = require("express");
const Course = require("../models/Course.model");

const addCourse = async (req, res) => {
  try {
    const {
      title,
      description,
      category,
      tutorId,
      duration,
      thumbnail,
      price,
    } = req.body;

    const newCourse = new Course({
      title,
      description,
      category,
      tutorId,
      duration,
      thumbnail,
      price,
    });
    await newCourse.save();
    res.status(201).json({ message: "Course Created Successfully", newCourse });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Course Creation Failed", details: err.message });
  }
};

const getCourse = async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json({ courses: courses });
  } catch (err) {
    res.status(500).json({ error: "Login Failed", details: err.message });
  }
};

module.exports = { addCourse, getCourse };
