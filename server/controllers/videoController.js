const path = require("path");
const { extractAudio } = require("../services/ffmpegService");

const uploadVideo = async (req, res) => {
    if (!req.file) {
        return res.status(400).json({
            success: false,
            message: "No video uploaded"
        });
    }

    const videoPath = req.file.path;

    const audioFileName = `${Date.now()}-audio.wav`;
    const audioPath = path.join(
        __dirname,
        "../processing",
        audioFileName
    );

    try {
        await extractAudio(videoPath, audioPath);

        res.status(200).json({
            success: true,
            message: "Video uploaded and audio extracted successfully",
            video: {
                originalName: req.file.originalname,
                fileName: req.file.filename,
                size: req.file.size
            },
            audio: {
                fileName: audioFileName
            }
        });
    } catch (error) {
        console.error("FFmpeg error:", error);

        res.status(500).json({
            success: false,
            message: "Video uploaded, but audio extraction failed"
        });
    }
};

module.exports = {
    uploadVideo
};