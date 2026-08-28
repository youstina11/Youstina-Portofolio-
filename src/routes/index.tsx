import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Youstina — AI Engineer" },
      {
        name: "description",
        content:
          "Youstina is an AI engineer building intelligent systems — machine learning, LLM applications, and production AI tooling.",
      },
      { property: "og:title", content: "Youstina — AI Engineer" },
      {
        property: "og:description",
        content:
          "AI engineer building intelligent systems — machine learning, LLM applications, and production AI tooling.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="content-fade-in space-y-16">
      {/* Hero */}
      <section>
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          Available for AI & ML opportunities
        </div>
        <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl">
          Building the
          <span className="text-primary"> intelligent </span>
          layer of software.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          I'm Youstina, an AI engineer focused on turning research into reliable
          products. I design machine learning pipelines, ship large language model
          applications, and put models into production where they actually matter.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            View projects
            <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
          >
            Get in touch
          </Link>
        </div>
      </section>

      {/* About */}
      <section>
        <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">
          About
        </h2>
        <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
          <p>
            I work at the intersection of research and engineering — translating
            cutting-edge machine learning into systems people use every day. My
            recent focus is large language model applications: retrieval
            pipelines, evaluation harnesses, and the guardrails that keep models
            useful in production.
          </p>
          <p>
            Before that, I trained and deployed models across natural language
            processing and computer vision, always with an eye on the full
            lifecycle — data, training, serving, and monitoring. I care deeply
            about evaluation, reproducibility, and shipping things that hold up
            under real-world load.
          </p>
        </div>
      </section>

      {/* Focus areas */}
      <section>
        <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">
          What I work on
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            {
              title: "LLM Applications",
              body: "Retrieval-augmented generation, agentic workflows, prompt evaluation, and fine-tuning.",
            },
            {
              title: "ML Systems",
              body: "Training pipelines, model serving, feature stores, and production monitoring.",
            },
            {
              title: "Evaluation",
              body: "Offline and online eval harnesses, dataset curation, and guardrails for safe outputs.",
            },
            {
              title: "MLOps",
              body: "Reproducible training, CI for models, and deployment on cloud and edge runtimes.",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
            >
              <h3 className="font-display text-base font-semibold text-foreground">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Selected work teaser */}
      <section>
        <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">
          Selected work
        </h2>
        <p className="mt-2 text-base text-muted-foreground">
          A few things I've built recently.{" "}
          <Link to="/projects" className="font-semibold text-primary hover:underline">
            See all projects →
          </Link>
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            { name: "RAG Knowledge Base", tag: "LLM" },
            { name: "Eval Harness", tag: "Tooling" },
            { name: "Vision Defect Scan", tag: "CV" },
          ].map((p) => (
            <Link
              key={p.name}
              to="/projects"
              className="group rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
            >
              <div className="text-xs font-medium text-primary">{p.tag}</div>
              <div className="mt-2 flex items-center justify-between">
                <span className="font-display text-sm font-semibold text-foreground">
                  {p.name}
                </span>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
