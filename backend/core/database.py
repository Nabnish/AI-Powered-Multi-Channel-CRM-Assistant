from motor.motor_asyncio import AsyncIOMotorClient
from app.core.config import settings


mongo_client = AsyncIOMotorClient(settings.mongodb_uri)

db = mongo_client[settings.mongodb_database]

support_staff_collection = db["support_staff"]
clients_collection = db["clients"]
leads_collection = db["leads"]
emails_collection = db["emails"]
calls_collection = db["calls"]
chat_summaries_collection = db["chat_summaries"]