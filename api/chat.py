from fastapi import FastAPI
from pydantic import BaseModel
import openai
import os

app = FastAPI()

openai.api_key = os.getenv("OPENAI_API_KEY")

class ChatRequest(BaseModel):
    message: str
    model: str = "gpt-3.5-turbo"

@app.post("/api/chat")
async def chat(request: ChatRequest):
    try:
        response = openai.ChatCompletion.create(
            model=request.model,
            messages=[{"role": "user", "content": request.message}]
        )
        return {"reply": response["choices"][0]["message"]["content"]}
    except Exception as e:
        return {"error": str(e)}
