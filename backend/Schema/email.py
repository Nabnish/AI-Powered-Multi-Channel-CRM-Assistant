from pydantic import BaseModel, EmailStr
from typing import Optional, List
from datetime import datetime


class EmailCreate(BaseModel):
    client_id: str
    lead_id: Optional[str] = None
    message_id: str
    sender: EmailStr
    recipients: List[EmailStr]
    subject: Optional[str] = None
    body: str
    timestamp: datetime


class EmailResponse(BaseModel):
    email_id: str
    client_id: str
    lead_id: Optional[str] = None
    message_id: str
    sender: EmailStr
    recipients: List[EmailStr]
    subject: Optional[str] = None
    body: str
    timestamp: datetime

    summary: Optional[str] = None
    sentiment: Optional[str] = None
    intent: Optional[str] = None
    processed: bool = False