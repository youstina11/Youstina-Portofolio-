import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Github } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Youstina, AI Engineer" },
      {
        name: "description",
        content:
          "Selected AI and machine learning projects by Youstina — LLM applications, evaluation tooling, and production ML systems.",
      },
      { property: "og:title", content: "Projects — Youstina, AI Engineer" },
      {
        property: "og:description",
        content:
          "Selected AI and machine learning projects — LLM applications, evaluation tooling, and production ML systems.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

const projects = [
  {
    name: "RAG Knowledge Base",
    tag: "LLM · Retrieval",
    year: "2026",
    description:
      "A retrieval-augmented chat assistant over a large internal document corpus. Hybrid search, re-ranking, and citation-grounded answers with a feedback loop that improves retrieval over time.",
    stack: ["Python", "LangChain", "pgvector", "FastAPI"],
  },
  {
    name: "Model Eval Harness",
    tag: "Tooling · Evaluation",
    year: "2025",
    description:
      "A framework for running offline and online evaluations across LLM checkpoints. Supports custom rubrics, regression detection, and side-by-side human review.",
    stack: ["TypeScript", "Python", "DuckDB", "Docker"],
  },
  {
    name: "Vision Defect Scanner",
    tag: "Computer Vision",
    year: "2025",
    description:
      "Edge-deployed defect detection model for a manufacturing line. Trained on imbalanced data with active learning to keep labeling costs low while hitting 99% recall on critical defects.",
    stack: ["PyTorch", "ONNX", "TensorRT", "gRPC"],
  },
  {
    name: "Forecasting Pipeline",
    tag: "ML · MLOps",
    year: "2024",
    description:
      "Time-series forecasting service with automated retraining, drift monitoring, and shadow deployments. Replaced a manual spreadsheet workflow for a logistics team.",
    stack: ["Python", "Prophet", "Airflow", "AWS"],
  },
  {
    name: "Prompt Library",
    tag: "LLM · DX",
    year: "2024",
    description:
      "Versioned prompt registry with diffing, A/B testing, and rollback. Gave a team of engineers and analysts a single source of truth for production prompts.",
    stack: ["TypeScript", "Next.js", "Postgres"],
  },
  {
    name: "Speech-to-Text Adapter",
    tag: "NLP · Audio",
    year: "2023",
    description:
      "Fine-tuned a speech model for a domain accent, cutting transcription error rate by 38% on internal audio compared to the off-the-shelf baseline.",
    stack: ["PyTorch", "HuggingFace", "WandB"],
  },
];

function ProjectsPage() {
  return (
    <div className="content-fade-in">
      <header className="mb-10">
        <h1 className="font-display text-4xl font-bold tracking-tight text-foreground">
          Projects
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
          A selection of AI and machine learning work — from research prototypes to
          systems running in production. Each one taught me something about the gap
          between a model that demos well and one that holds up at scale.
        </p>
      </header>

      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.name}
            className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
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
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:text-primary"
              >
                <Github className="h-3.5 w-3.5" /> Code
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:text-primary"
              >
                Case study <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
