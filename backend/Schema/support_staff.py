from pydantic import BaseModel, EmailStr, Field
from typing import Optional
from datetime import datetime


class SupportStaffCreate(BaseModel):
    name: str = Field(..., min_length=2)
    email: EmailStr
    password: str = Field(..., min_length=8)


class SupportStaffLogin(BaseModel):
    email: EmailStr
    password: str


class SupportStaffResponse(BaseModel):
    staff_id: str
    name: str
    email: EmailStr
    role: str = "support_staff"
    status: str = "active"
    created_at: datetime