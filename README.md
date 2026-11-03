# Saurav Kumar — Premium AI Engineer & Data Scientist Portfolio

A responsive, dark futuristic portfolio with a 3D interactive hero, animated sections, expandable project case studies, resume-based content, contact form UI and a portfolio Q&A assistant.

## What's included

- React + TypeScript + Vite frontend
- Three.js via React Three Fiber and Drei for the 3D hero
- Framer Motion transitions
- FastAPI backend with health, portfolio, contact and assistant endpoints
- Public visitor experience: no login required
- No visitor login or admin link in the public navigation
- Resume-based content for all five projects, internship, education, skills and certifications

## Requirements

- Node.js 18+ and npm
- Python 3.10+

## 1. Start the backend

Open a terminal:

```bash
cd backend
python -m venv .venv
```

Windows PowerShell:
```powershell
.venv\Scripts\Activate.ps1
```

Windows CMD:
```bat
.venv\Scripts\activate
```

macOS/Linux:
```bash
source .venv/bin/activate
```

Then:

```bash
python -m pip install -r requirements.txt
uvicorn app.main:app --reload --host 127.0.0.1 --port 8000
```

API documentation: http://127.0.0.1:8000/docs

## 2. Start the frontend

Open a second terminal from the project root:

```bash
npm install
npm run dev
```

Open the URL Vite prints, normally http://localhost:5173.

## 3. Add your resume PDF

Your supplied resume PDF is included in `public/Saurav_Kumar_Resume.pdf`. The Resume buttons point to this file.

## 4. Personalize your links

Open `src/App.tsx` and update the `profile` object:
- Add your exact LinkedIn URL to `linkedin`.
- Update email, GitHub or location if needed.

Project repository links were not supplied in the resume, so the case studies expand locally rather than inventing GitHub URLs.

## 5. Production build

```bash
npm run build
```

The output is created in `dist/`.

## Important production notes

- The public portfolio does not require visitor login.
- An admin dashboard and authentication are not included in this standalone starter. Add them as a separate protected deployment feature if needed.
- The contact API currently acknowledges messages but does not store or email them. Integrate an email provider or database before publishing the contact form as a real delivery channel.
- The portfolio assistant uses deterministic resume-grounded responses, not an external LLM. Connect an LLM provider securely on the backend if you want a live AI assistant.
- Do not expose API keys or admin credentials in frontend code.
- Three.js is loaded as part of the frontend bundle. For low-powered devices, consider adding a static fallback or lazy-loading the scene.

## Resume-grounded content

Content is based on the supplied Saurav Kumar resume. No unprovided project metrics, grades, certification issuers, LinkedIn URL or repository URLs have been invented.
