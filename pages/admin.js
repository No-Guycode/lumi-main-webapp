import { useState, useEffect } from "react";

export default function AdminDashboard() {
    const [model, setModel] = useState("gpt-3.5-turbo");
    const [requests, setRequests] = useState(0);

    useEffect(() => {
        // Load saved model and request count from local storage (since no database)
        const savedModel = localStorage.getItem("ai_model");
        const savedRequests = localStorage.getItem("chat_requests");
        if (savedModel) setModel(savedModel);
        if (savedRequests) setRequests(parseInt(savedRequests, 10));
    }, []);

    const handleModelChange = (event) => {
        setModel(event.target.value);
        localStorage.setItem("ai_model", event.target.value);
    };

    return (
        <div style={{ padding: "20px", fontFamily: "Arial", maxWidth: "600px", margin: "auto" }}>
            <h1>Admin Dashboard</h1>
            <p>Total Requests: {requests}</p>

            <label>AI Model:</label>
            <select value={model} onChange={handleModelChange}>
                <option value="gpt-3.5-turbo">GPT-3.5 Turbo</option>
                <option value="gpt-4">GPT-4</option>
            </select>
        </div>
    );
}
