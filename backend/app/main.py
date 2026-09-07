from fastapi import FastAPI
from pymongo import MongoClient
import os

app = FastAPI()

MONGO_URL = os.getenv("MONGO_URL", "mongodb://mongo:27017")

client = MongoClient(MONGO_URL)
db = client["crm"]


@app.get("/")
def root():
    return {"message": "CRM Assistant API is running"}


@app.get("/db-test")
def db_test():
    db.command("ping")
    return {"message": "MongoDB connected successfully"}