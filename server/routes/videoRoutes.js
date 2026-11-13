const express = require("express");
const multer = require("multer");
const path = require("path");
const { uploadVideo } = require("../controllers/videoController");

const router = express.Router();

const allowedExtensions = [".mp4", ".mov", ".avi", ".mkv", ".webm"];

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../uploads"));
    },

    filename: (req, file, cb) => {
        const extension = path.extname(file.originalname).toLowerCase();
        const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1e9)}${extension}`;

        cb(null, uniqueName);
    }
});

const fileFilter = (req, file, cb) => {
    const extension = path.extname(file.originalname).toLowerCase();

    if (!allowedExtensions.includes(extension)) {
        return cb(new Error("Only video files are allowed"));
    }

    if (!file.mimetype.startsWith("video/")) {
        return cb(new Error("Invalid video file type"));
    }

    cb(null, true);
};

const upload = multer({
    storage,
    fileFilter,
    limits: {
        fileSize: 500 * 1024 * 1024
    }
});

router.post(
    "/upload",
    upload.single("video"),
    uploadVideo
);

router.use((error, req, res, next) => {
    if (error instanceof multer.MulterError) {
        if (error.code === "LIMIT_FILE_SIZE") {
            return res.status(400).json({
                success: false,
                message: "Video size cannot exceed 500 MB"
            });
        }

        return res.status(400).json({
            success: false,
            message: error.message
        });
    }

    if (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        });
    }

    next();
});

module.exports = router;