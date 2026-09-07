# Docker + FastAPI Setup

This guide explains how to run the FastAPI backend and MongoDB using Docker.

## Project Structure

```text
AI-Powered-Multi-Channel-CRM-Assistant/
│
├── backend/
│   ├── Dockerfile
│   ├── requirements.txt
│   └── app/
│       ├── __init__.py
│       └── main.py
│
├── frontend/
│
├── docker-compose.yml
├── .env
└── README.md
```

---

# Prerequisites

Install:

* Docker
* Docker Compose

Check your installation:

```bash
docker --version
docker compose version
```

---

# Backend Setup

The backend uses:

* FastAPI
* Uvicorn
* PyMongo
* python-dotenv

### `backend/requirements.txt`

```text
fastapi
uvicorn[standard]
pymongo
python-dotenv
```

---

# Environment Variables

Create a `.env` file in the project root:

```env
MONGODB_URI=mongodb://mongo:27017
```

> Do not commit `.env` if it contains passwords, API keys, or other secrets.

Add it to `.gitignore`:

```text
.env
```

---

# FastAPI Application

The FastAPI application connects to MongoDB using PyMongo.

Example:

```python
from fastapi import FastAPI
from pymongo import MongoClient
import os
from dotenv import load_dotenv

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
```

---

# Dockerfile

The backend is containerized using the following Dockerfile:

```dockerfile
FROM python:3.12-slim

WORKDIR /app

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8000

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
```

### What this does

1. Uses Python 3.12.
2. Creates `/app` as the working directory.
3. Installs Python dependencies.
4. Copies the backend code.
5. Exposes port `8000`.
6. Starts FastAPI using Uvicorn.

---

# Docker Compose

`docker-compose.yml`:

```yaml
services:
  backend:
    build:
      context: ./backend
    container_name: crm-backend
    ports:
      - "8000:8000"
    env_file:
      - .env
    depends_on:
      - mongo

  mongo:
    image: mongo:8
    container_name: crm-mongo
    ports:
      - "27017:27017"
    volumes:
      - mongo-data:/data/db

volumes:
  mongo-data:
```

Docker Compose creates two services:

```text
backend
   ↓
FastAPI

mongo
   ↓
MongoDB
```

The backend can reach MongoDB using:

```text
mongodb://mongo:27017
```

The hostname is `mongo` because that is the Docker Compose service name.

---

# Build and Start

From the project root:

```bash
docker compose up --build
```

The first build may take some time because Docker needs to download the Python and MongoDB images and install dependencies.

---

# Check Running Containers

Run:

```bash
docker ps
```

You should see something similar to:

```text
crm-backend
crm-mongo
```

Both should have a running status.

---

# Test FastAPI

Open:

```text
http://localhost:8000
```

Expected response:

```json
{
  "message": "CRM Assistant API is running"
}
```

---

# FastAPI Swagger Documentation

FastAPI automatically provides interactive API documentation.

Open:

```text
http://localhost:8000/docs
```

You can test API endpoints directly from the Swagger UI.

---

# Test MongoDB Connection

Open:

```text
http://localhost:8000/db-test
```

Expected response:

```json
{
  "message": "MongoDB connected successfully"
}
```

This confirms that:

```text
Browser
   ↓
FastAPI
   ↓
PyMongo
   ↓
MongoDB
```

is working correctly.

---

# Stop the Containers

Press:

```text
Ctrl + C
```

or run:

```bash
docker compose down
```

The MongoDB data is preserved because it is stored in the Docker volume:

```text
mongo-data
```

---

# Rebuild After Code/Dependency Changes

If `requirements.txt` or the Dockerfile changes:

```bash
docker compose up --build
```

If only application code changes and you are not using a development volume/reload setup:

```bash
docker compose up --build
```

---

# Useful Docker Commands

### View running containers

```bash
docker ps
```

### View all containers

```bash
docker ps -a
```

### View backend logs

```bash
docker logs crm-backend
```

### View MongoDB logs

```bash
docker logs crm-mongo
```

### Stop and remove containers

```bash
docker compose down
```

### Stop and remove containers + volumes

```bash
docker compose down -v
```

> `docker compose down -v` deletes the MongoDB Docker volume and therefore removes the stored database data.

---

# Current Setup

At this stage the project has:

* [x] FastAPI backend
* [x] Uvicorn server
* [x] Docker backend container
* [x] MongoDB container
* [x] PyMongo connection
* [x] MongoDB persistent volume
* [x] FastAPI Swagger documentation
* [x] MongoDB connection test endpoint

Next planned components:

* [ ] CRM database models
* [ ] CRUD APIs
* [ ] Authentication
* [ ] AI/LLM integration
* [ ] Call transcription
* [ ] NLP processing
* [ ] Lead scoring
* [ ] Follow-up automation
* [ ] React frontend Docker setup
* [ ] Ollama Docker setup
