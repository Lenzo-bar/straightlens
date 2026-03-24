from fastapi import FastAPI
from pydantic import BaseModel
from typing import List

app = FastAPI(title="StraightLens API", version="1.3-alpha")

class AskRequest(BaseModel):
    question: str

class AskResponse(BaseModel):
    summary: str
    key_dimensions: List[str]
    practical_steps: List[str]
    perspectives: List[str]
    risks: List[str]
    positive_direction: List[str]
    moderation_note: str

@app.get("/health")
def health():
    return {"status": "ok", "service": "StraightLens API"}

@app.post("/api/ask", response_model=AskResponse)
def ask(req: AskRequest):
    q = req.question.strip()
    return AskResponse(
        summary=f"StraightLens structured answer for: {q}",
        key_dimensions=["Context", "Evidence", "Practical action", "Risks"],
        practical_steps=["Clarify the goal", "Check evidence", "Choose a safe action", "Review results"],
        perspectives=["There may be multiple valid viewpoints depending on context."],
        risks=["Oversimplification", "Poor source quality", "Unsafe application"],
        positive_direction=["Use the answer to improve understanding and promote constructive action."],
        moderation_note="Balanced mode: AI-generated response with safety-aware guidance."
    )
