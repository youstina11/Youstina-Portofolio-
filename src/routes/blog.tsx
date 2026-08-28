import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Writing — Youstina, AI Engineer" },
      {
        name: "description",
        content:
          "Notes and articles by Youstina on building LLM applications, evaluation, and shipping machine learning to production.",
      },
      { property: "og:title", content: "Writing — Youstina, AI Engineer" },
      {
        property: "og:description",
        content:
          "Notes and articles on building LLM applications, evaluation, and shipping machine learning to production.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BlogPage,
});

const posts = [
  {
    title: "Why your RAG demo works and production doesn't",
    date: "Aug 2026",
    readingTime: "8 min",
    excerpt:
      "Retrieval looks magical in a demo and falls apart at scale. A field guide to the failure modes that only show up once real users ask real questions.",
    tag: "LLM",
  },
  {
    title: "An eval harness is a product, not a script",
    date: "Jun 2026",
    readingTime: "6 min",
    excerpt:
      "The difference between an eval that catches regressions and one that gives false confidence. How to design rubrics your team will actually trust.",
    tag: "Evaluation",
  },
  {
    title: "Active learning when labels are expensive",
    date: "Apr 2026",
    readingTime: "7 min",
    excerpt:
      "A practical workflow for cutting labeling costs on imbalanced datasets without giving up recall on the classes that matter.",
    tag: "ML",
  },
  {
    title: "Quantizing a vision model for the edge",
    date: "Feb 2026",
    readingTime: "5 min",
    excerpt:
      "Going from a PyTorch checkpoint to a 3× faster edge runtime, and the accuracy trade-offs I made along the way.",
    tag: "MLOps",
  },
  {
    title: "Prompts are code: version them like it",
    date: "Dec 2025",
    readingTime: "4 min",
    excerpt:
      "How a versioned prompt registry with diffing and rollback saved a team from a silent production regression.",
    tag: "LLM",
  },
];

function BlogPage() {
  return (
    <div className="content-fade-in">
      <header className="mb-10">
        <h1 className="font-display text-4xl font-bold tracking-tight text-foreground">
          Writing
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Notes from the trenches of applied AI — what worked, what didn't, and the
          lessons that only come from putting models in front of real users.
        </p>
      </header>

      <div className="space-y-3">
        {posts.map((p) => (
          <a
            key={p.title}
            href="#"
            className="group flex flex-col gap-2 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="font-medium text-primary">{p.tag}</span>
                <span>·</span>
                <span>{p.date}</span>
                <span>·</span>
                <span>{p.readingTime}</span>
              </div>
              <h2 className="mt-1.5 font-display text-lg font-semibold text-foreground">
                {p.title}
              </h2>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {p.excerpt}
              </p>
            </div>
            <ArrowUpRight className="hidden h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary sm:block" />
          </a>
        ))}
      </div>
    </div>
  );
}
