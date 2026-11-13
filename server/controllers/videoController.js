const uploadVideo = (req, res) => {
    if (!req.file) {
        return res.status(400).json({
            success: false,
            message: "No video uploaded"
        });
    }

    res.status(200).json({
        success: true,
        message: "Video uploaded successfully",
        video: {
            originalName: req.file.originalname,
            fileName: req.file.filename,
            size: req.file.size,
            path: req.file.path
        }
    });
};

module.exports = {
    uploadVideo
};