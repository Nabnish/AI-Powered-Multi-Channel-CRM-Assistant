from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime


class LeadCreate(BaseModel):
    client_id: str
    source: str
    requirement: Optional[str] = None
    status: str = "New"


class LeadUpdate(BaseModel):
    requirement: Optional[str] = None
    status: Optional[str] = None
    intent_score: Optional[float] = Field(None, ge=0, le=100)
    buying_probability: Optional[float] = Field(None, ge=0, le=100)


class LeadResponse(BaseModel):
    lead_id: str
    client_id: str
    source: str
    requirement: Optional[str] = None
    status: str
    intent_score: float = 0
    buying_probability: float = 0
    created_at: datetime
    updated_at: datetime