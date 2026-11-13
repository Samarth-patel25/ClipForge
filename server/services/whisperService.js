const { spawn } = require("child_process"); //spawn is used to run the whisperService.py script in a separate process
const path = require("path");

const transcribeAudio = (audioPath) => {
    return new Promise((resolve, reject) => {
        const scriptPath = path.join(__dirname, "whisperService.py");

        const python = spawn(
            path.join(__dirname, "../../whisper-env/Scripts/python.exe"),
            [scriptPath, audioPath]
        );

        let output = "";
        let errorOutput = "";

        python.stdout.on("data", (data) => {
            output += data.toString();
        });

        python.stderr.on("data", (data) => {
            errorOutput += data.toString();
        });

        python.on("close", (code) => {
            if (code !== 0) {
                return reject(
                    new Error(errorOutput || `Whisper exited with code ${code}`)
                );
            }

            try {
                const result = JSON.parse(output);
                resolve(result);
            } catch (error) {
                reject(new Error("Invalid JSON returned by Whisper"));
            }
        });
    });
};

module.exports = {
    transcribeAudio
};