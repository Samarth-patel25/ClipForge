import { useEffect, useState } from "react";

function App() {
    const [message, setMessage] = useState("Connecting to ClipForge...");

    useEffect(() => {
        fetch("http://localhost:8000/api/health")
            .then(res => res.json())
            .then(data => setMessage(data.message))
            .catch(() => setMessage("Backend connection failed"));
    }, []);

    return (
        <div>
            <h1>ClipForge</h1>
            <p>AI-Powered Viral Clip Generator</p>
            <p>{message}</p>
        </div>
    );
}

export default App;