# ✅ Step 1: Project Setup - Adaptive News Reader

This step sets up the complete folder structure and basic scaffolding for the frontend and backend using **Vite + React + TailwindCSS** and **FastAPI (Python)**.

---

## 📁 Folder Structure

adaptive-news-reader/
├── backend/
│ ├── main.py # FastAPI backend logic
│ ├── articles.json # Mock data source
│ └── venv/ # Python virtual environment
├── frontend/
│ ├── index.html
│ ├── src/
│ │ ├── App.jsx
│ │ └── main.jsx
│ ├── tailwind.config.js
│ └── vite.config.js


---

## ⚙️ Backend Setup (Python + FastAPI)

### 1. Create a Virtual Environment
```bash
cd backend
python -m venv venv


2. Activate Environment
On Linux/Mac:
source venv/bin/activate

On Windows (if needed):
venv\Scripts\activate

3. Install Dependencies
pip install fastapi uvicorn

4. Create main.py with Sample API Route

5. Create Mock articles.json

6. Run the Backend Server
uvicorn main:app --reload --port 8000

✅ Completed
 Folder structure initialized

 Backend environment created and activated

 FastAPI and Uvicorn installed

 API route and mock data created

 Backend server up and running on http://localhost:8000