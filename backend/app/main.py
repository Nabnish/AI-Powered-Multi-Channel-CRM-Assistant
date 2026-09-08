
from fastapi import FastAPI
from pymongo import MongoClient
import os
from dotenv import load_dotenv

from app.api.auth import router as auth_router

load_dotenv()

MONGODB_URI = os.getenv("MONGODB_URI")

app = FastAPI()

client = MongoClient(MONGODB_URI)
db = client["crm"]


@app.get("/")
def root():
    return {"message": "CRM Assistant API is running"}


@app.get("/db-test")
def db_test():
    db.command("ping")
    return {"message": "MongoDB connected successfully"}

app.include_router(auth_router)