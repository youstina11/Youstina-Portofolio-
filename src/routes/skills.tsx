import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills & Experience — Youstina, AI Engineer" },
      {
        name: "description",
        content:
          "Youstina's technical skills and professional experience across machine learning, LLM applications, and MLOps.",
      },
      { property: "og:title", content: "Skills & Experience — Youstina, AI Engineer" },
      {
        property: "og:description",
        content:
          "Technical skills and professional experience across machine learning, LLM applications, and MLOps.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SkillsPage,
});

const skillGroups = [
  {
    title: "Machine Learning",
    skills: ["PyTorch", "TensorFlow", "scikit-learn", "HuggingFace", "Computer Vision", "NLP"],
  },
  {
    title: "LLM & Applied AI",
    skills: ["RAG", "LangChain", "LlamaIndex", "Prompt Engineering", "Fine-tuning", "Eval & Guardrails"],
  },
  {
    title: "MLOps & Infra",
    skills: ["Docker", "Kubernetes", "Airflow", "MLflow", "WandB", "AWS", "GCP"],
  },
  {
    title: "Engineering",
    skills: ["Python", "TypeScript", "FastAPI", "Postgres", "pgvector", "Redis"],
  },
];

const experience = [
  {
    role: "AI Engineer",
    company: "Independent / Contract",
    period: "2024 — Present",
    summary:
      "Designing and shipping LLM applications for clients — retrieval systems, evaluation harnesses, and production guardrails. Owning the full loop from data to deployment.",
    points: [
      "Built a RAG assistant serving thousands of queries with citation-grounded answers.",
      "Shipped an eval harness adopted across an 8-person applied AI team.",
    ],
  },
  {
    role: "Machine Learning Engineer",
    company: "Product Company",
    period: "2022 — 2024",
    summary:
      "Trained and deployed models for vision and language tasks in a consumer-facing product. Owned monitoring, drift detection, and retraining.",
    points: [
      "Reduced a vision model's false-positive rate by 41% via active learning.",
      "Cut inference cost 3× by moving to a quantized edge runtime.",
    ],
  },
  {
    role: "Data Scientist",
    company: "Startup",
    period: "2020 — 2022",
    summary:
      "First ML hire. Built forecasting and recommendation prototypes that grew into core product features.",
    points: [
      "Deployed a forecasting pipeline that replaced a manual spreadsheet workflow.",
      "Established the team's first eval and experimentation practices.",
    ],
  },
];

const education = [
  {
    degree: "M.Sc. in Computer Science",
    school: "University",
    detail: "Specialization in Machine Learning",
  },
  {
    degree: "B.Sc. in Computer Science",
    school: "University",
    detail: "Minor in Mathematics",
  },
];

function SkillsPage() {
  return (
    <div className="content-fade-in space-y-14">
      <header>
        <h1 className="font-display text-4xl font-bold tracking-tight text-foreground">
          Skills & Experience
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
          The tools I reach for and the path that got me here. I prioritize depth
          in a few areas over shallow breadth — and I'm always adding to the list.
        </p>
      </header>

      {/* Skills */}
      <section>
        <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">
          Skills
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {skillGroups.map((g) => (
            <div key={g.title} className="rounded-xl border border-border bg-card p-5">
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
      </section>

      {/* Experience */}
      <section>
        <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">
          Experience
        </h2>
        <ol className="mt-6 space-y-6 border-l border-border pl-6">
          {experience.map((e) => (
            <li key={e.role + e.period} className="relative pl-4">
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
      </section>

      {/* Education */}
      <section>
        <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">
          Education
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {education.map((ed) => (
            <div key={ed.degree} className="rounded-xl border border-border bg-card p-5">
              <h3 className="font-display text-base font-semibold text-foreground">
                {ed.degree}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{ed.school}</p>
              <p className="mt-1 text-xs text-muted-foreground">{ed.detail}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
