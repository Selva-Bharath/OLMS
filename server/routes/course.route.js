const express = require("express");
const router = express.Router();
const { addCourse, getCourse } = require("../controllers/courseController");

router.post("/add", addCourse);
router.get("/get", getCourse);

module.exports = router;
