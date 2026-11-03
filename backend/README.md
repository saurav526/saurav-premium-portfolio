# Portfolio API

Run from the `backend` folder:

```bash
python -m venv .venv
# Windows:
.venv\Scripts\activate
# macOS/Linux:
source .venv/bin/activate

python -m pip install -r requirements.txt
uvicorn app.main:app --reload --host 127.0.0.1 --port 8000
```

API docs: http://127.0.0.1:8000/docs

The contact endpoint is intentionally demo-only: it acknowledges submissions but does not store or email them. Connect an email provider or database before production use.
