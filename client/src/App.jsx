import { useState } from "react";

function App() {
    const [video, setVideo] = useState(null);
    const [message, setMessage] = useState("");

    const handleUpload = async () => {
        if (!video) {
            setMessage("Please select a video");
            return;
        }

        const formData = new FormData();
        formData.append("video", video);

        setMessage("Uploading video...");

        try {
            const response = await fetch(
                "http://localhost:8000/api/videos/upload",
                {
                    method: "POST",
                    body: formData
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Upload failed");
            }

            setMessage(`Upload successful: ${data.video.originalName}`);
        } catch (error) {
            setMessage(error.message);
        }
    };

    return (
        <div style={{ padding: "40px" }}>
            <h1>ClipForge</h1>
            <p>AI-Powered Viral Clip Generator</p>

            <input
                type="file"
                accept="video/*"
                onChange={(e) => setVideo(e.target.files[0])}
            />

            <br />
            <br />

            <button onClick={handleUpload}>
                Upload Video
            </button>

            <p>{message}</p>
        </div>
    );
}

export default App;