const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const videoRoutes = require("./routes/videoRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api/videos", videoRoutes);

app.get("/api/health", (req, res) => {
    res.json({
        success: true,
        message: "ClipForge server is running"
    });
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`ClipForge server running on http://localhost:${PORT}`);
});