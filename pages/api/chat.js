export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    const { messages, model } = req.body;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
            model: model || "gpt-3.5-turbo",
            messages: messages || [{ role: "system", content: "You are a helpful assistant." }],
        }),
    });

    const data = await response.json();
    return res.status(200).json(data);
}
