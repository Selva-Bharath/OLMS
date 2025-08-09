const express = require("express");
const cors = require("cors");
const ImageKit = require("imagekit");
require("dotenv").config();
const connectDB = require("./config/DB");
const userRoutes = require("./routes/user.route");
const courseRoute = require("./routes/course.route");

const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.json());
app.use(cors());

const imagekit = new ImageKit({
  publicKey: process.env.Imagekit_Pub_KEY,
  privateKey: process.env.Imagekit_Pri_KEY,
  urlEndpoint: process.env.urlEndpoint,
});

connectDB();

app.use("/api/users", userRoutes);
app.use("/api/courses", courseRoute);

app.get("/upload-auth", (req, res) => {
  try {
    const { signature, expire, token } = imagekit.getAuthenticationParameters();
    return res.json({ signature, expire, token });
  } catch (err) {
    console.error("Auth error:", err);
    res.status(500).json({ error: "Auth failed" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
