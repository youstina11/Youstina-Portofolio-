import { Reveal } from "@/components/Reveal";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Github, Trophy, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Youstina Salah" },
      {
        name: "description",
        content:
          "Selected full-stack, AI, and data projects by Youstina Salah Nathan — AI employment platform, RAG chatbot, .NET e-commerce, and machine learning work.",
      },
      { property: "og:title", content: "Projects — Youstina Salah" },
      {
        property: "og:description",
        content:
          "Selected full-stack, AI, and data projects — AI employment platform, RAG chatbot, .NET e-commerce, and machine learning work.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://my-spotlight-showcase-016.lovable.app/projects" },
      { property: "og:site_name", content: "Youstina Salah Portfolio" },
    ],
    links: [{ rel: "canonical", href: "https://my-spotlight-showcase-016.lovable.app/projects" }],
  }),
  component: ProjectsPage,
});

const projects: {
  name: string;
  tag: string;
  year: string;
  award?: string;
  description: string;
  stack: string[];
  repo?: string;
}[] = [
  {
    name: "PostpartumRAG — Maternal Mental Health Chatbot",
    tag: "RAG · GenAI",
    year: "Aug 2026",
    award: "Top 3 at national hackathon",
    description:
      "A grounded, citation-traceable RAG chatbot supporting maternal mental health guidance. Section-aware chunking of WHO, mhGAP, and NICE CG192 clinical sources with Gemini embeddings and Supabase vector search.",
    stack: ["Angular", "Express.js", "MongoDB", "Python", "Gemini", "Supabase"],
    repo: "https://github.com/youstina11/-PostpartumRAG-Mental-Health-Care-Evidence-Grounded-AI-Healthcare-Assistant",
  },
  {
    name: "Jobify — AI-Powered Employment Platform",
    tag: "Full-Stack · AI",
    year: "2025–2026",
    description:
      "Owned the AI/Python backend across a 3-role team. Delivered an AI Interview System (OpenCV, MediaPipe, Whisper, Claude & Gemini APIs), a Flask CV Generator with model fallback chains, and a CV Analyzer (TF-IDF, Cosine & Jaccard similarity). Defended the full architecture to academic and technical stakeholders.",
    stack: ["Python", "Flask", "OpenCV", "MediaPipe", "Whisper", "Claude", "Gemini"],
    repo: "https://github.com/youstina11/Graduation-Project",
  },
  {
    name: "E-Commerce Web Application",
    tag: "Full-Stack · .NET",
    year: "2025",
    description:
      "Full-stack ASP.NET Core app (MVC storefront + Web API) with EF Core/SQL Server data layer, user authentication and role-based access, product catalog, cart, and checkout flow. Built as the capstone of a .NET Core diploma.",
    stack: ["ASP.NET Core", "EF Core", "SQL Server", "MVC", "Web API"],
  },
  {
    name: "Iris Flower Classification",
    tag: "ML · Python",
    year: "2025",
    description:
      "A Random Forest classifier that identifies Iris species (Setosa, Versicolor, Virginica) with full data exploration, model training, and evaluation in a documented notebook.",
    stack: ["Python", "scikit-learn", "Pandas", "Matplotlib"],
    repo: "https://github.com/youstina11/Task1-Iris-Flower-Classification-",
  },
  {
    name: "Unemployment Rate Analysis",
    tag: "Data · EDA",
    year: "2025",
    description:
      "Exploratory data analysis of unemployment trends in India — regional patterns, urban vs. rural differences, seasonality, and the impact of COVID-19, visualized end to end.",
    stack: ["Python", "Pandas", "Seaborn", "Jupyter"],
    repo: "https://github.com/youstina11/Task-2-Unemployment-Rate-Analysis-",
  },
  {
    name: "Car Price Prediction",
    tag: "ML · Regression",
    year: "2025",
    description:
      "Machine learning pipeline predicting car prices: data preprocessing, EDA, regression modeling, feature importance analysis, and model evaluation.",
    stack: ["Python", "scikit-learn", "Pandas", "NumPy"],
    repo: "https://github.com/youstina11/Task-3-Car-price-prediction",
  },
  {
    name: "End-to-End Data Pipeline — EDA & SQLite",
    tag: "Data · Pipeline",
    year: "2025",
    description:
      "A mini project building an end-to-end data pipeline: Python exploratory analysis integrated with a SQLite database for structured querying and reporting.",
    stack: ["Python", "SQLite", "Pandas", "Jupyter"],
    repo: "https://github.com/youstina11/EDA-mini-project-",
  },
  {
    name: "Data Analysis Capstone",
    tag: "Data · BI",
    year: "2024",
    description:
      "Cleaned and validated 50,000+ records, built a data model and interactive Power BI dashboard with 8+ KPI visualizations, and wrote 20+ advanced SQL queries (JOINs, CTEs, window functions) for performance reporting.",
    stack: ["Power BI", "SQL", "Pandas", "NumPy", "DAX"],
  },
  {
    name: "Breast Cancer Health Dashboard",
    tag: "BI · Visualization",
    year: "2024",
    description:
      "An interactive Power BI dashboard applying data-visualization best practices to breast cancer health data — surfacing diagnosis trends, risk factors, and key patient metrics to support early-detection insights.",
    stack: ["Power BI", "Excel"],
  },
  {
    name: "Library Database Management System",
    tag: "Database",
    year: "2023",
    description:
      "Designed a normalized (3NF) Oracle Database schema; implemented stored procedures, triggers, and 15+ queries managing 1,000+ records within a 2-week sprint.",
    stack: ["Oracle", "SQL", "Stored Procedures"],
  },
  {
    name: "Network Infrastructure Design",
    tag: "Networking",
    year: "2023",
    description:
      "Designed and simulated a small business network in Cisco Packet Tracer applying TCP/IP, subnetting, and VLAN configuration across 3 simulated subnets.",
    stack: ["Cisco Packet Tracer", "TCP/IP", "VLAN"],
  },
];

function ProjectsPage() {
  return (
    <div className="content-fade-in">
      <Reveal as="header" className="mb-10">
        <h1 className="font-display text-4xl font-bold tracking-tight text-foreground">
          Projects
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
          A selection of full-stack, AI, and data work — from a national-hackathon-winning
          RAG chatbot to production-style .NET Core applications and ML notebooks.
        </p>
      </Reveal>

      <Reveal className="grid gap-5 sm:grid-cols-2" delay={80}>
        {projects.map((p, i) => (
          <article
            key={p.name}
            className="hover-scale fade-up group flex flex-col rounded-xl border border-border bg-card p-6 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
            style={{ animationDelay: `${i * 70}ms` }}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-xs font-medium text-primary">{p.tag}</div>
                <h2 className="mt-1.5 font-display text-lg font-semibold text-foreground">
                  {p.name}
                </h2>
              </div>
              <span className="text-xs text-muted-foreground">{p.year}</span>
            </div>
            {p.award && (
              <div className="mt-2 inline-flex w-fit items-center gap-1.5 rounded-md bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                <Trophy className="h-3.5 w-3.5" /> {p.award}
              </div>
            )}
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
              {p.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-md border border-border bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground"
                >
                  {s}
                </span>
              ))}
            </div>
            <div className="mt-5 flex items-center gap-4 border-t border-border pt-4">
              <a
                href={p.repo ?? "https://github.com/youstina11"}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:text-primary"
              >
                <Github className="h-3.5 w-3.5" />
                {p.repo ? "View on GitHub" : "GitHub profile"}
              </a>
              {p.repo && (
                <a
                  href={`${p.repo}#readme`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:text-primary"
                >
                  Details <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          </article>
        ))}
      </Reveal>
    </div>
  );
}
