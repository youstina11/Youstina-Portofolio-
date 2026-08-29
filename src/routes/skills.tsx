import { Reveal } from "@/components/Reveal";
import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, Languages, Award } from "lucide-react";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills & Experience — Youstina Salah" },
      {
        name: "description",
        content:
          "Youstina Salah Nathan's technical skills, project experience, education, certifications, and languages across full-stack, AI, and data.",
      },
      { property: "og:title", content: "Skills & Experience — Youstina Salah" },
      {
        property: "og:description",
        content:
          "Technical skills, project experience, education, certifications, and languages across full-stack, AI, and data.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SkillsPage,
});

const skillGroups = [
  {
    title: "Programming & Core",
    skills: ["Python", "C#", "C++", "JavaScript", "jQuery", "HTML", "CSS", "SQL", "OOP", "Git", "Java"],
  },
  {
    title: ".NET & Backend",
    skills: ["ASP.NET Core (MVC & Web API)", "Entity Framework Core", "SQL Server", "RESTful API", "Auth", "Flask", "Model Fallback Chains"],
  },
  {
    title: "AI / Machine Learning",
    skills: ["scikit-learn", "NLP", "OpenCV", "MediaPipe", "TF-IDF", "Cosine/Jaccard Similarity", "Model Evaluation"],
  },
  {
    title: "Generative AI & APIs",
    skills: ["Google Gemini API", "Anthropic Claude API", "OpenAI Whisper", "REST API Design", "Prompt Engineering"],
  },
  {
    title: "Data Analysis & BI",
    skills: ["Advanced Excel", "Power BI", "KPI Dashboards", "Data Visualization", "Statistical Analysis", "Pandas", "NumPy", "ETL", "DAX"],
  },
  {
    title: "Databases",
    skills: ["SQL Server", "SQLite", "Oracle", "MySQL", "DB Design & Normalization", "Oracle Cloud"],
  },
  {
    title: "Tools",
    skills: ["Jupyter", "MS 365", "Dynamics 365 CRM", "Cisco Packet Tracer", "Visual Studio"],
  },
];

const experience = [
  {
    role: "AI/Python Backend Developer — Jobify",
    company: "Graduation Project · EELU",
    period: "2025 – 2026",
    summary:
      "Owned the AI/Python backend across a 3-role team for an AI-powered employment platform, defending the full architecture to academic and technical stakeholders.",
    points: [
      "Built an AI Interview System (OpenCV, MediaPipe, Whisper, Claude & Gemini APIs).",
      "Delivered a Flask CV Generator with model fallback chains and a CV Analyzer (TF-IDF, Cosine & Jaccard similarity).",
    ],
  },
  {
    role: "Backend Developer — E-Commerce App",
    company: "Route IT Training Center · .NET Core Diploma",
    period: "2025",
    summary:
      "Built a full-stack ASP.NET Core app as the capstone of a .NET Core diploma.",
    points: [
      "MVC storefront + Web API with EF Core/SQL Server data layer.",
      "Implemented user auth, role-based access, product catalog, cart, and checkout flow.",
    ],
  },
  {
    role: "PostpartumRAG — Maternal Mental Health Chatbot",
    company: "Hackathon · Orange Digital Center, ITIDA, TIEC, Creativa",
    period: "Aug 2026",
    summary:
      "Built a grounded, citation-traceable RAG chatbot; placed among the Top 3 teams and received a certificate of achievement.",
    points: [
      "Section-aware chunking of WHO, mhGAP, and NICE CG192 clinical sources.",
      "Gemini embeddings + Supabase vector search across Angular/Express/MongoDB/Python stack.",
    ],
  },
  {
    role: "Big Data Analysis Trainee",
    company: "ITIDA & NTI Summer Training Program",
    period: "Jul – Aug 2025",
    summary:
      "Completed a 120-hour Big Data Analysis program (90 technical + 30 freelancing hours); scored 87.5%, certified jointly by ITIDA & NTI.",
    points: [
      "Large-scale data collection, consolidation, processing, and analysis.",
    ],
  },
  {
    role: "Machine Learning Intern",
    company: "CodeAlpha (Remote)",
    period: "2024 – 2025",
    summary:
      "Delivered three end-to-end ML projects as production-ready notebooks with documented outcomes.",
    points: [
      "Iris Classification, Unemployment Rate Analysis, and Car Price Prediction.",
      "Pandas, NumPy, scikit-learn with LinkedIn write-ups.",
    ],
  },
  {
    role: "Data Analysis & SQL Projects",
    company: "Udacity",
    period: "2024",
    summary:
      "Cleaned 50,000+ records, built Power BI dashboards, and wrote 20+ advanced SQL queries for performance reporting.",
    points: [
      "Capstone: interactive Power BI dashboard with 8+ KPI visualizations.",
      "SQL project: subqueries, GROUP BY, CASE logic, 12-month trend analysis.",
    ],
  },
];

const certifications = [
  "Back-end (.NET Core) Diploma — Route IT (2025)",
  "Power BI Data Modelling Basics — Microsoft (2026)",
  "Data Analyst 101 — Microsoft (2026)",
  "Business Analytics with Excel — Microsoft (2026)",
  "Security, Compliance & Identity Fundamentals — Microsoft (2024)",
  "Big Data Analysis Training — ITIDA & NTI, 120 hrs (2025)",
  "Data Analysis Professional Track — Udacity (2024)",
  "SQL for Data Analysis — Udacity (2024)",
  "AI Fundamentals with IBM SkillsBuild — Cisco (2026)",
  "Oracle Cloud Infrastructure Foundations — Oracle (2023)",
  "Oracle Database Foundations — Oracle (2023)",
  "Networking Essentials & Switching — Cisco (2023)",
];

function SkillsPage() {
  return (
    <div className="content-fade-in space-y-14">
      <Reveal as="header" className="fade-up">
        <h1 className="font-display text-4xl font-bold tracking-tight text-foreground">
          Skills & Experience
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
          A full-stack, AI, and data toolkit — and the project path that built it.
        </p>
      </Reveal>

      {/* Skills */}
      <section>
        <h2 className="fade-up font-display text-2xl font-semibold tracking-tight text-foreground">
          Skills
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {skillGroups.map((g, i) => (
            <div
              key={g.title}
              className="hover-scale fade-up rounded-xl border border-border bg-card p-5 hover:border-primary/40"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <h3 className="font-display text-sm font-semibold text-primary">
                {g.title}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-border bg-muted px-2.5 py-1 text-xs font-medium text-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Experience */}
      <section>
        <h2 className="fade-up font-display text-2xl font-semibold tracking-tight text-foreground">
          Experience
        </h2>
        <ol className="mt-6 space-y-6 border-l border-border pl-6">
          {experience.map((e, i) => (
            <li
              key={e.role + e.period}
              className="fade-up relative pl-4"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <span className="absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 border-background bg-primary" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {e.role}
                </h3>
                <span className="text-xs font-medium text-muted-foreground">
                  {e.period}
                </span>
              </div>
              <p className="text-sm font-semibold text-primary">{e.company}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {e.summary}
              </p>
              <ul className="mt-2 space-y-1">
                {e.points.map((pt) => (
                  <li
                    key={pt}
                    className="flex gap-2 text-sm text-muted-foreground"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    {pt}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </Reveal>

      {/* Education + Languages */}
      <Reveal as="section" className="grid gap-4 sm:grid-cols-2">
        <div className="hover-scale fade-up rounded-xl border border-border bg-card p-6 hover:border-primary/40">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-primary" />
            <h2 className="font-display text-lg font-semibold text-foreground">Education</h2>
          </div>
          <div className="mt-3 space-y-3 text-sm">
            <div>
              <p className="font-semibold text-foreground">B.Sc. Information Technology</p>
              <p className="text-muted-foreground">Egyptian E-Learning University (EELU), Assiut</p>
              <p className="text-xs text-muted-foreground">Coursework: Data Structures, DBMS, Networks, Programming, Data Analysis</p>
            </div>
          </div>
        </div>
        <div className="hover-scale fade-up rounded-xl border border-border bg-card p-6 hover:border-primary/40" style={{ animationDelay: "80ms" }}>
          <div className="flex items-center gap-2">
            <Languages className="h-5 w-5 text-primary" />
            <h2 className="font-display text-lg font-semibold text-foreground">Languages</h2>
          </div>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="flex justify-between"><span className="text-muted-foreground">Arabic</span><span className="font-medium text-foreground">Native</span></li>
            <li className="flex justify-between"><span className="text-muted-foreground">English</span><span className="font-medium text-foreground">Professional Working</span></li>
            <li className="flex justify-between"><span className="text-muted-foreground">French</span><span className="font-medium text-foreground">Intermediate</span></li>
          </ul>
          <p className="mt-4 text-xs text-muted-foreground">English course — The American University in Cairo (AUC), 2022.</p>
        </div>
      </Reveal>

      {/* Certifications */}
      <section>
        <div className="fade-up flex items-center gap-2">
          <Award className="h-5 w-5 text-primary" />
          <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">
            Certifications
          </h2>
        </div>
        <div className="mt-6 grid gap-2 sm:grid-cols-2">
          {certifications.map((c, i) => (
            <div
              key={c}
              className="fade-up flex items-start gap-2 rounded-lg border border-border bg-card px-4 py-3 text-sm text-muted-foreground"
              style={{ animationDelay: `${i * 40}ms` }}
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              {c}
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
