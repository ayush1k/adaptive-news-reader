from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import json

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/articles/{page}")
def get_articles(page: int):
    with open("articles.json") as f:
        all_articles = json.load(f)
    return all_articles.get(str(page), [])
