import { useState } from "react";

export default function Chatbot() {
    const [message, setMessage] = useState("");
    const [response, setResponse] = useState("");

    async function sendMessage() {
        const res = await fetch("/api/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message }),
        });

        const data = await res.json();
        setResponse(data.reply);
    }

    return (
        <div>
            <h1>Lumi Chatbot</h1>
            <input value={message} onChange={(e) => setMessage(e.target.value)} />
            <button onClick={sendMessage}>Send</button>
            <p>{response}</p>
        </div>
    );
}
