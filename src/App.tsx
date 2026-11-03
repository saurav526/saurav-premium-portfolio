import { useMemo, useState } from "react";
import type { FormEvent } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars, MeshDistortMaterial, OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import {
  ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, Download, Menu, X,
  BrainCircuit, Database, Workflow, ShieldCheck, Activity, Code2, Cpu,
  ExternalLink, Sparkles, Terminal, Send, ChevronRight, GraduationCap,
  BriefcaseBusiness, Layers3, Globe2, Bot, Network, FileText
} from "lucide-react";
import { useRef } from "react";
import type { Mesh } from "three";

const API = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

const profile = {
  name: "Saurav Kumar",
  role: "AI Engineer  /  Data Scientist",
  location: "Pune, Maharashtra, India",
  email: "sauravtiwari2712005@gmail.com",
  github: "https://github.com/saurav526",
  linkedin: "", // Add your exact LinkedIn profile URL here.
  summary: "I engineer intelligent systems at the intersection of Data Science, Machine Learning and Generative AI — from reliable data pipelines and explainable models to tool-using agents and production-minded APIs.",
};

const projects = [
  {
    number: "01", name: "Clinical Risk & Patient Outcome Intelligence System", category: "ML  /  MLOps  /  Agentic AI",
    description: "An end-to-end 30-day readmission prediction system with model benchmarking, SHAP explanations and an LLM agent that invokes prediction and patient-analysis tools.",
    stack: ["Python", "Scikit-learn", "SHAP", "MLflow", "FastAPI", "PostgreSQL", "Groq", "Docker"],
    icon: Activity, accent: "violet",
    details: "Benchmarks Logistic Regression, Random Forest and Gradient Boosting using ROC-AUC selection. Includes audit logs, Prometheus metrics, a Plotly dashboard, Docker Compose and automated tests. Resume describes a 5,000-record synthetic dataset with 30 features."
  },
  {
    number: "02", name: "OpsPilot AI – Incident Intelligence Copilot", category: "Anomaly Detection  /  RAG  /  Agent",
    description: "An incident copilot that detects unusual service metrics, retrieves relevant runbooks and recommends read-only investigation steps.",
    stack: ["Python", "Isolation Forest", "TF-IDF", "FastAPI", "Streamlit", "SQLite", "Groq", "Pytest"],
    icon: Terminal, accent: "cyan",
    details: "Combines Isolation Forest anomaly detection with TF-IDF/cosine-similarity runbook retrieval. Exposes anomaly, investigation and audit endpoints, with a no-LLM fallback."
  },
  {
    number: "03", name: "Autonomous Cyber Defense System", category: "Graph ML  /  Anomaly Detection",
    description: "A simulated defensive ML environment that models network telemetry as graphs and learns threat-response actions.",
    stack: ["Python", "Graph Neural Networks", "Autoencoders", "Reinforcement Learning", "Streamlit"],
    icon: ShieldCheck, accent: "blue",
    details: "Uses node- and edge-level features with a self-supervised graph autoencoder to flag anomalies by reconstruction error. A reinforcement-learning policy selects monitor, rate-limit, isolate or block actions by threat severity."
  },
  {
    number: "04", name: "AI Medical Chatbot", category: "Generative AI  /  RAG",
    description: "A context-aware medical chatbot grounded in retrieved knowledge for multi-turn question answering.",
    stack: ["Python", "LangChain", "FAISS", "Hugging Face", "Embeddings", "Prompt Engineering"],
    icon: BrainCircuit, accent: "violet",
    details: "Uses semantic chunking, embedding retrieval, cosine-similarity ranking, conversational memory and custom prompts to ground responses and reduce hallucinations."
  },
  {
    number: "05", name: "Expense Tracker MCP Server", category: "LLM Tool Integration  /  MCP",
    description: "A FastMCP server that lets an AI assistant manage expenses in plain language through structured tools.",
    stack: ["Python", "FastMCP", "Model Context Protocol", "SQLite", "uv"],
    icon: Workflow, accent: "cyan",
    details: "Exposes tools to add expenses, list transactions by date range and summarize by category, plus a live-editable categories resource. Uses parameterized SQLite queries and automatic schema creation."
  }
];

const skillGroups = [
  { title: "AI & Intelligence", icon: BrainCircuit, skills: ["Machine Learning", "Deep Learning", "Generative AI", "Agentic AI", "RAG", "LLMs", "Multi-Agent Systems", "Tool Calling", "MCP", "Explainable AI", "SHAP", "Anomaly Detection"] },
  { title: "Engineering & Frameworks", icon: Code2, skills: ["Python", "SQL", "C++", "PyTorch", "TensorFlow", "Scikit-learn", "LangChain", "LangGraph", "LangSmith", "FastAPI", "Pydantic", "SQLAlchemy"] },
  { title: "Data & Platforms", icon: Database, skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly", "PostgreSQL", "MongoDB", "MySQL", "SQLite", "Big Data Querying"] },
  { title: "Cloud & MLOps", icon: Cpu, skills: ["AWS", "Docker", "Kubernetes", "MLflow", "Prometheus", "Git", "GitHub", "Streamlit", "Power BI", "Excel", "Jupyter", "Colab"] }
];

const certifications = [
  "Generative AI and Large Language Models",
  "Neural Networks and Deep Learning",
  "Machine Learning Professional Certification",
  "Machine Learning with Python",
  "Introduction to Artificial Intelligence",
  "Power BI for Data Visualization"
];

function Orb() {
  const ref = useRef<Mesh>(null);
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.12;
      ref.current.rotation.y += delta * 0.2;
      ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.55) * 0.12;
    }
  });
  return <Float speed={1.4} rotationIntensity={0.25} floatIntensity={0.35}>
    <mesh ref={ref} scale={1.42}>
      <icosahedronGeometry args={[1, 12]} />
      <MeshDistortMaterial color="#7657ff" emissive="#21104f" emissiveIntensity={0.65} roughness={0.18} metalness={0.78} distort={0.28} speed={1.7} />
    </mesh>
  </Float>;
}

function Scene() {
  return <Canvas camera={{ position: [0, 0, 4.7], fov: 42 }} dpr={[1, 1.5]}>
    <ambientLight intensity={1.1} />
    <pointLight position={[3, 3, 4]} intensity={28} color="#4de7ff" />
    <pointLight position={[-3, -2, 2]} intensity={24} color="#865dff" />
    <Stars radius={70} depth={35} count={850} factor={2.2} saturation={0} fade speed={0.45} />
    <Orb />
    <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.45} />
  </Canvas>;
}

function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return <div className="section-title">
    <span className="eyebrow"><span className="eyebrow-dot" />{eyebrow}</span>
    <h2>{title}</h2>
    {text && <p>{text}</p>}
  </div>;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useState<{role: string; text: string}[]>([
    { role: "assistant", text: "Hi! I'm Saurav's portfolio assistant. Ask me about his projects, skills or experience." }
  ]);
  const [contact, setContact] = useState({ name: "", email: "", message: "" });
  const [contactStatus, setContactStatus] = useState("");
  const nav = ["About", "Skills", "Experience", "Projects", "Certifications", "Contact"];

  const stats = useMemo(() => [
    ["05", "Featured projects"], ["04", "AI / engineering domains"], ["10 weeks", "Data Science internship"]
  ], []);

  async function sendChat() {
    const q = chatInput.trim();
    if (!q) return;
    setChatMessages(m => [...m, { role: "user", text: q }]);
    setChatInput("");
    try {
      const res = await fetch(`${API}/api/assistant`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ question: q }) });
      const data = await res.json();
      setChatMessages(m => [...m, { role: "assistant", text: data.answer || "I couldn't find an answer to that just now." }]);
    } catch {
      setChatMessages(m => [...m, { role: "assistant", text: "The assistant API is not connected yet. You can still explore the portfolio sections and project details." }]);
    }
  }

  async function sendContact(e: FormEvent) {
    e.preventDefault();
    setContactStatus("Sending...");
    try {
      const res = await fetch(`${API}/api/contact`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(contact) });
      const data = await res.json();
      setContactStatus(data.message || "Message received.");
      setContact({ name: "", email: "", message: "" });
    } catch {
      setContactStatus("Contact API unavailable. Please email Saurav directly.");
    }
  }

  return <div className="app-shell">
    <div className="ambient ambient-one" /><div className="ambient ambient-two" />
    <header className="topbar">
      <a className="brand" href="#home"><span className="brand-mark"><BrainCircuit size={19}/></span><span>SAURAV<span className="brand-dot">.</span></span></a>
      <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X/> : <Menu/>}</button>
      <nav className={menuOpen ? "nav-links open" : "nav-links"}>
        {nav.map(item => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>)}
      </nav>
      <div className="nav-actions">
        <a className="nav-resume" href="/Saurav_Kumar_Resume.pdf" target="_blank" rel="noreferrer"><Download size={14}/> Resume</a>
      </div>
    </header>

    <main>
      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }} className="availability"><span className="pulse-dot"/> OPEN TO AI ENGINEERING, DATA SCIENCE & ML OPPORTUNITIES</motion.div>
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .1, duration: .7 }}>
            <div className="hero-kicker">SAURAV KUMAR <span>//</span> {profile.role.toUpperCase()}</div>
            <h1>Engineering<br/><span className="gradient-text">intelligence.</span><br/>Building systems<br/><span className="outline-text">that think.</span></h1>
            <p className="hero-description">{profile.summary}</p>
            <div className="hero-tags"><span>Machine Learning</span><span>Generative AI</span><span>Agentic Systems</span><span>MLOps</span></div>
            <div className="hero-buttons">
              <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17}/></a>
              <a className="button button-secondary" href="/Saurav_Kumar_Resume.pdf" target="_blank" rel="noreferrer"><Download size={16}/> View resume</a>
            </div>
            <div className="social-row">
              <a href={profile.github} target="_blank" rel="noreferrer"><Github size={16}/> GitHub <ArrowUpRight size={12}/></a>
              {profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16}/> LinkedIn <ArrowUpRight size={12}/></a>}
              <span className="location"><Globe2 size={14}/>{profile.location}</span>
            </div>
          </motion.div>
        </div>
        <div className="hero-visual">
          <div className="scene-frame"><div className="scene-label"><span>LIVE RENDER</span><span className="scene-status"><i/> SYSTEM ONLINE</span></div><Scene/><div className="scene-caption">NEURAL SYSTEMS / 3D CORE</div></div>
          <div className="float-card float-card-top"><span className="mini-icon"><Network size={15}/></span><div><b>Agentic workflows</b><small>Tools · orchestration · MCP</small></div><span className="tiny-live"/></div>
          <div className="float-card float-card-bottom"><span className="mini-icon cyan"><Activity size={15}/></span><div><b>Explainable ML</b><small>Model insight · SHAP</small></div><span className="tiny-live"/></div>
          <div className="orbit orbit-a"/><div className="orbit orbit-b"/>
        </div>
        <a href="#about" className="scroll-cue"><span>SCROLL TO EXPLORE</span><ArrowDownRight size={15}/></a>
      </section>

      <section className="stats-strip section-wrap">
        {stats.map(([n, label]) => <div className="stat" key={label}><strong>{n}</strong><span>{label}</span></div>)}
      </section>

      <section className="content-section section-wrap" id="about">
        <SectionTitle eyebrow="01 / THE PERSON BEHIND THE SYSTEMS" title="Curiosity into capability." text="I enjoy taking complex problems apart, finding the signal in the data, and engineering solutions that can be understood, tested and used."/>
        <div className="about-grid">
          <div className="about-main glass-panel">
            <div className="panel-top"><span>PROFILE.SYS</span><span className="panel-live">● AVAILABLE</span></div>
            <h3>Data science foundations.<br/><span className="gradient-text">Systems engineering mindset.</span></h3>
            <p>{profile.summary}</p>
            <p>My work spans the complete lifecycle: exploratory data analysis, feature engineering, model evaluation, explainability, API serving, experiment tracking, containerization and dashboards.</p>
            <div className="about-meta"><span><GraduationCap size={16}/> B.Tech · Data Science & AI</span><span><Globe2 size={16}/> Pune, India</span></div>
          </div>
          <div className="about-side">
            <div className="principle-card"><BrainCircuit/><span>01</span><h4>Think in systems</h4><p>Connect models, data, tools and people into a coherent workflow.</p></div>
            <div className="principle-card"><ShieldCheck/><span>02</span><h4>Build with trust</h4><p>Prioritize explainability, validation, testing and responsible access.</p></div>
          </div>
        </div>
      </section>

      <section className="content-section section-wrap" id="skills">
        <SectionTitle eyebrow="02 / TECHNICAL TOOLKIT" title="The tools behind the thinking." text="A practical toolkit across machine learning, AI application engineering, data platforms and deployment."/>
        <div className="skills-grid">
          {skillGroups.map((group, i) => <motion.div whileHover={{ y: -5 }} className="skill-card glass-panel" key={group.title}>
            <div className="skill-card-head"><span className="skill-icon"><group.icon size={19}/></span><span className="mono">0{i+1}</span></div>
            <h3>{group.title}</h3><div className="skill-pills">{group.skills.map(s => <span key={s}>{s}</span>)}</div>
          </motion.div>)}
        </div>
      </section>

      <section className="content-section section-wrap" id="experience">
        <SectionTitle eyebrow="03 / EXPERIENCE & EDUCATION" title="Learning by building." text="Academic foundations paired with hands-on exposure to data engineering and applied machine learning."/>
        <div className="timeline">
          <div className="timeline-item"><div className="timeline-marker"><BriefcaseBusiness size={17}/></div><div className="timeline-content glass-panel"><div className="timeline-meta"><span>APR 2026 — JUN 2026</span><span className="tag">10-WEEK PROGRAM</span></div><h3>Data Science Intern (Virtual)</h3><h4>EduSkills Foundation · AICTE & Siemens</h4><ul><li>Completed a 10-week program in data engineering, machine learning and applied AI.</li><li>Applied Python, Pandas and NumPy to hands-on data problems.</li><li>Developed and evaluated ML models through preprocessing, feature engineering and model evaluation.</li></ul></div></div>
          <div className="timeline-item"><div className="timeline-marker"><GraduationCap size={17}/></div><div className="timeline-content glass-panel"><div className="timeline-meta"><span>2024 — 2028</span><span className="tag">UNDERGRADUATE</span></div><h3>Bachelor of Technology</h3><h4>MIT ADT University · Pune</h4><p>Data Science & AI focus, building foundations in computing, analytics and intelligent systems.</p></div></div>
        </div>
      </section>

      <section className="content-section section-wrap" id="projects">
        <SectionTitle eyebrow="04 / SELECTED ENGINEERING WORK" title="Projects with a purpose." text="A selection of applied systems across clinical prediction, incident intelligence, graph learning, retrieval and AI tool integration."/>
        <div className="project-grid">
          {projects.map((p, i) => <motion.article layout whileHover={{ y: -7 }} className={`project-card glass-panel ${p.accent}`} key={p.number} onClick={() => setActiveProject(activeProject === i ? null : i)}>
            <div className="project-top"><span className="project-number">{p.number} / CASE STUDY</span><span className="project-open"><ArrowUpRight size={17}/></span></div>
            <div className="project-icon"><p.icon size={22}/></div>
            <span className="project-category">{p.category}</span><h3>{p.name}</h3><p className="project-description">{p.description}</p>
            <div className="project-stack">{p.stack.map(s => <span key={s}>{s}</span>)}</div>
            {activeProject === i && <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="project-details"><b>IMPLEMENTATION NOTES</b><p>{p.details}</p></motion.div>}
            <button className="case-link" onClick={(e) => { e.stopPropagation(); setActiveProject(activeProject === i ? null : i); }}>{activeProject === i ? "Close details" : "Explore case study"} <ChevronRight size={15}/></button>
          </motion.article>)}
        </div>
      </section>

      <section className="content-section section-wrap" id="certifications">
        <SectionTitle eyebrow="05 / CONTINUOUS LEARNING" title="Knowledge in motion." text="Certifications and focused learning across AI, machine learning, neural networks and analytics."/>
        <div className="cert-grid">{certifications.map((c, i) => <div className="cert-card glass-panel" key={c}><span className="cert-index">0{i+1}</span><span className="cert-icon"><FileText size={18}/></span><div><h3>{c}</h3><p>Professional learning · Certificate listed on resume</p></div><ArrowUpRight size={16}/></div>)}</div>
      </section>

      <section className="contact-section section-wrap" id="contact">
        <div className="contact-glow"/>
        <SectionTitle eyebrow="06 / START A CONVERSATION" title="Have a problem worth solving?" text="Open to AI engineering, data science and machine learning opportunities, and collaborative projects."/>
        <div className="contact-grid">
          <div className="contact-copy"><h3>Let's build something<br/><span className="gradient-text">meaningful.</span></h3><a className="contact-email" href={`mailto:${profile.email}`}><Mail size={17}/>{profile.email}<ArrowUpRight size={14}/></a><div className="contact-social"><a href={profile.github} target="_blank" rel="noreferrer"><Github/> GitHub</a>{profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin/> LinkedIn</a>}</div></div>
          <form className="contact-form glass-panel" onSubmit={sendContact}><label>Your name<input required value={contact.name} onChange={e => setContact({...contact, name:e.target.value})} placeholder="Name"/></label><label>Email address<input required type="email" value={contact.email} onChange={e => setContact({...contact, email:e.target.value})} placeholder="you@example.com"/></label><label>What would you like to discuss?<textarea required rows={4} value={contact.message} onChange={e => setContact({...contact, message:e.target.value})} placeholder="Tell me a little about your idea..."/></label><button className="button button-primary" type="submit">Send message <Send size={15}/></button>{contactStatus && <p className="form-status">{contactStatus}</p>}</form>
        </div>
      </section>
    </main>

    <footer className="footer section-wrap"><a className="brand" href="#home"><span className="brand-mark"><BrainCircuit size={17}/></span><span>SAURAV<span className="brand-dot">.</span></span></a><span>Designed & engineered with curiosity.</span><span>© {new Date().getFullYear()} Saurav Kumar</span></footer>

    <button className="assistant-fab" onClick={() => setChatOpen(!chatOpen)} aria-label="Open portfolio assistant"><Sparkles size={19}/><span>Ask Saurav AI</span></button>
    {chatOpen && <div className="chat-panel glass-panel"><div className="chat-head"><div><span className="chat-online"/> SAURAV.AI <small>PORTFOLIO ASSISTANT</small></div><button onClick={() => setChatOpen(false)}><X size={18}/></button></div><div className="chat-messages">{chatMessages.map((m,i)=><div className={`chat-bubble ${m.role}`} key={i}>{m.text}</div>)}</div><form className="chat-input" onSubmit={e => {e.preventDefault(); void sendChat();}}><input value={chatInput} onChange={e=>setChatInput(e.target.value)} placeholder="Ask about projects or skills..."/><button type="submit"><Send size={16}/></button></form></div>}
  </div>;
}