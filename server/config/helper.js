const bcrypt = require("bcryptjs");

const hashPass = async (pass) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(pass, salt);
    return hashed;
  } catch (err) {
    throw new Error("Password hashing failed");
  }
};

module.exports = hashPass;
