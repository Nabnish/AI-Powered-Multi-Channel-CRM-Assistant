from pydantic import BaseModel
from typing import Optional
from datetime import datetime


class CallCreate(BaseModel):
    client_id: str
    lead_id: Optional[str] = None
    timestamp: datetime
    duration: Optional[int] = None
    recording_url: Optional[str] = None


class CallResponse(BaseModel):
    call_id: str
    client_id: str
    lead_id: Optional[str] = None

    timestamp: datetime
    duration: Optional[int] = None
    recording_url: Optional[str] = None

    transcript: Optional[str] = None
    summary: Optional[str] = None
    sentiment: Optional[str] = None
    intent: Optional[str] = None

    processed: bool = False