const express = require("express");
const router = express.Router();
const {
  register,
  login,
  verify,
  update,
  deleteUser,
} = require("../controllers/userController");
const authenticate = require("../middleware/authMiddleware");

router.post("/register", register);
router.post("/login", login);
router.put("/update", update);
router.delete("/delete", deleteUser);
router.get("/verify", authenticate, verify);

module.exports = router;
