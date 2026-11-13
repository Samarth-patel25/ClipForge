const ffmpeg = require("fluent-ffmpeg");

const extractAudio = (inputPath, outputPath) => {
    return new Promise((resolve, reject) => {
        ffmpeg(inputPath)
            .noVideo()
            .audioCodec("pcm_s16le")
            .audioFrequency(16000)
            .audioChannels(1)
            .save(outputPath)
            .on("end", () => {
                resolve(outputPath);
            })
            .on("error", (error) => {
                reject(error);
            });
    });
};

module.exports = {
    extractAudio
};