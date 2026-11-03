from __future__ import annotations

import os
from datetime import datetime, timezone
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr, Field

app = FastAPI(
    title="Saurav Kumar — Portfolio API",
    version="1.0.0",
    description="Public API for the Saurav Kumar AI Engineer & Data Scientist portfolio."
)

origin = os.getenv("PORTFOLIO_ORIGIN", "http://localhost:5173")
app.add_middleware(
    CORSMiddleware,
    allow_origins=[origin, "http://127.0.0.1:5173"],
    allow_credentials=False,
    allow_methods=["GET", "POST"],
    allow_headers=["Content-Type"],
)

class ContactMessage(BaseModel):
    name: str = Field(min_length=1, max_length=100)
    email: EmailStr
    message: str = Field(min_length=5, max_length=4000)

class AssistantQuestion(BaseModel):
    question: str = Field(min_length=1, max_length=1000)

PROJECTS = [
    {"name": "Clinical Risk & Patient Outcome Intelligence System", "domain": "ML / MLOps / Agentic AI"},
    {"name": "OpsPilot AI – Incident Intelligence Copilot", "domain": "Anomaly Detection / RAG / Agent"},
    {"name": "Autonomous Cyber Defense System", "domain": "Graph ML / Anomaly Detection"},
    {"name": "AI Medical Chatbot", "domain": "Generative AI / RAG"},
    {"name": "Expense Tracker MCP Server", "domain": "LLM Tool Integration"},
]

@app.get("/api/health")
def health():
    return {"status": "healthy", "service": "portfolio-api", "timestamp": datetime.now(timezone.utc).isoformat()}

@app.get("/api/portfolio")
def portfolio():
    return {
        "name": "Saurav Kumar",
        "headline": "AI Engineer & Data Scientist",
        "location": "Pune, Maharashtra, India",
        "projects": PROJECTS,
        "public": True,
    }

@app.post("/api/contact")
def contact(message: ContactMessage):
    # Demo-safe endpoint: no message is persisted or emailed.
    # Connect an email provider or database before using this endpoint in production.
    return {
        "ok": True,
        "message": "Thanks for reaching out. The demo API received your message; please email Saurav directly for now.",
    }

@app.post("/api/assistant")
def assistant(payload: AssistantQuestion):
    q = payload.question.lower()
    answers = [
        (("clinical", "readmission", "patient", "shap"), "The Clinical Risk & Patient Outcome Intelligence System predicts 30-day readmission. It benchmarks Logistic Regression, Random Forest and Gradient Boosting, uses ROC-AUC for model selection, explains predictions with SHAP, and includes an LLM agent, FastAPI, MLflow, PostgreSQL, Prometheus and a Plotly dashboard."),
        (("opspilot", "incident", "runbook", "isolation forest"), "OpsPilot AI is an incident intelligence copilot. It uses Isolation Forest to detect unusual service metrics, TF-IDF/cosine similarity to retrieve runbooks, and a tool-using agent to recommend read-only investigation steps. It includes FastAPI endpoints, a Streamlit dashboard and SQLite audit logging."),
        (("cyber", "graph", "autoencoder", "reinforcement"), "The Autonomous Cyber Defense System models synthesized network telemetry as graphs. A self-supervised graph autoencoder flags anomalies by reconstruction error, while a reinforcement-learning policy selects monitor, rate-limit, isolate or block actions by threat severity."),
        (("medical", "chatbot", "faiss", "hugging"), "The AI Medical Chatbot is a RAG application using LangChain and Hugging Face models, semantic chunking, embeddings, FAISS retrieval, cosine-similarity ranking and conversational memory to ground multi-turn answers in medical knowledge."),
        (("mcp", "expense", "fastmcp", "model context"), "The Expense Tracker MCP Server uses FastMCP to expose structured tools for adding expenses, listing by date range and summarizing by category. SQLite provides persistent storage with parameterized queries."),
        (("skill", "technology", "stack", "language"), "Saurav's toolkit includes Python, SQL and C++; PyTorch, TensorFlow and Scikit-learn; LangChain, LangGraph, LangSmith and FastAPI; PostgreSQL, MongoDB, MySQL and SQLite; plus AWS, Docker, Kubernetes, MLflow and Prometheus."),
        (("intern", "experience", "eduskills", "siemens"), "Saurav completed a 10-week virtual Data Science internship with EduSkills Foundation, in association with AICTE and Siemens, from April to June 2026. The work covered data engineering, applied AI, Python, Pandas, NumPy, preprocessing, feature engineering and model evaluation."),
        (("education", "university", "degree", "college"), "Saurav is pursuing a Bachelor of Technology at MIT ADT University, Pune, from 2024 to 2028, with a Data Science and AI focus as described in his resume."),
        (("contact", "email", "reach"), "You can contact Saurav at sauravtiwari2712005@gmail.com or through the contact form on this website."),
    ]
    for keys, answer in answers:
        if any(k in q for k in keys):
            return {"answer": answer}
    return {"answer": "I can help with Saurav's five featured projects, AI and data skills, EduSkills / AICTE / Siemens internship, education and contact details. Try asking about one of those topics."}
