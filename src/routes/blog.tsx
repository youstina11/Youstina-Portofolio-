import { Reveal } from "@/components/Reveal";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Writing — Youstina Salah" },
      {
        name: "description",
        content:
          "Notes and write-ups by Youstina Salah Nathan on full-stack development, AI, RAG systems, and data analysis.",
      },
      { property: "og:title", content: "Writing — Youstina Salah" },
      {
        property: "og:description",
        content:
          "Notes and write-ups on full-stack development, AI, RAG systems, and data analysis.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BlogPage,
});

const posts = [
  {
    title: "Building PostpartumRAG: a grounded, citation-traceable chatbot",
    date: "Aug 2026",
    readingTime: "7 min",
    excerpt:
      "How we chunked WHO, mhGAP, and NICE clinical guidance into a section-aware retrieval pipeline and reached the top 3 at a national hackathon.",
    tag: "RAG",
  },
  {
    title: "Model fallback chains in a Flask CV generator",
    date: "Jul 2026",
    readingTime: "5 min",
    excerpt:
      "Designing a generative AI service that gracefully degrades from Gemini to Claude to a local model without breaking the user experience.",
    tag: "GenAI",
  },
  {
    title: "Cleaning 50,000+ records the boring, correct way",
    date: "May 2026",
    readingTime: "6 min",
    excerpt:
      "The Pandas and SQL workflow I used to validate a messy dataset before it ever touched a Power BI dashboard.",
    tag: "Data",
  },
  {
    title: "From notebooks to production: my ML intern projects",
    date: "Mar 2026",
    readingTime: "4 min",
    excerpt:
      "Lessons from shipping Iris Classification, Unemployment Rate Analysis, and Car Price Prediction as documented, reproducible notebooks.",
    tag: "ML",
  },
  {
    title: "Role-based auth in ASP.NET Core the simple way",
    date: "Jan 2026",
    readingTime: "5 min",
    excerpt:
      "How I wired user authentication and role-based access into an e-commerce storefront without over-engineering it.",
    tag: "Full-Stack",
  },
];

function BlogPage() {
  return (
    <div className="content-fade-in">
      <Reveal as="header" className="mb-10">
        <h1 className="font-display text-4xl font-bold tracking-tight text-foreground">
          Writing
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Notes from building full-stack apps, AI systems, and data pipelines — the parts
          that don't fit in a project README.
        </p>
      </Reveal>

      <div className="space-y-3">
        {posts.map((p, i) => (
          <a
            key={p.title}
            href="#"
            className="hover-scale fade-up group flex flex-col gap-2 rounded-xl border border-border bg-card p-5 hover:border-primary/40 sm:flex-row sm:items-center sm:justify-between"
            style={{ animationDelay: `${i * 70}ms` }}
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
