from pydantic import BaseModel, Field
from typing import Optional, Any, Dict, List
from datetime import datetime


class AIAnalysis(BaseModel):
    summary: Optional[str] = None
    key_points: List[str] = []
    sentiment: Optional[str] = None
    intent: Optional[str] = None
    intent_score: float = Field(0, ge=0, le=100)
    next_best_action: Optional[str] = None
    extracted_entities: Dict[str, Any] = {}


class ChatSummaryCreate(BaseModel):
    client_id: str
    lead_id: Optional[str] = None
    channel: str = "whatsapp"
    raw_data: Dict[str, Any]


class ChatSummaryResponse(BaseModel):
    summary_id: str
    client_id: str
    lead_id: Optional[str] = None
    channel: str

    raw_data: Dict[str, Any]
    ai_analysis: Optional[AIAnalysis] = None

    updated_at: datetime