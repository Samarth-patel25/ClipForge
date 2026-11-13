const path = require("path");
const { extractAudio } = require("../services/ffmpegService");
const { transcribeAudio } = require("../services/whisperService");

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

    const transcript = await transcribeAudio(audioPath);

    console.log("Whisper transcript:");
    console.log(JSON.stringify(transcript, null, 2));   
    
    res.status(200).json({
        success: true,
        message: "Video processed successfully",
        video: {
            originalName: req.file.originalname,
            fileName: req.file.filename,
            size: req.file.size
        },
        audio: {
            fileName: audioFileName
        },
        transcript
    });
    } catch (error) {
        console.error("Processing error:", error);

        res.status(500).json({
            success: false,
            message: "Video processing failed"
        });
    }
};

module.exports = {
    uploadVideo
};