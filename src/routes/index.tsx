import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Sparkles, Code2, Brain, BarChart3 } from "lucide-react";
import portrait from "@/assets/youstina-portrait.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Youstina Salah — Full-Stack & AI Engineer" },
      {
        name: "description",
        content:
          "Youstina Salah Nathan — full-stack developer and AI engineer building data-driven applications with .NET Core, Python, and machine learning.",
      },
      { property: "og:title", content: "Youstina Salah — Full-Stack & AI Engineer" },
      {
        property: "og:description",
        content:
          "Full-stack developer and AI engineer building data-driven applications with .NET Core, Python, and machine learning.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="content-fade-in space-y-20">
      {/* Hero */}
      <section className="grid items-center gap-10 sm:grid-cols-5">
        <div className="sm:col-span-3">
          <div className="fade-up inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Open to full-stack & AI engineering roles
          </div>
          <h1 className="fade-up mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl" style={{ animationDelay: "80ms" }}>
            Hi, I'm Youstina.
            <span className="text-gradient block">Full-Stack & AI Engineer.</span>
          </h1>
          <p className="fade-up mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground" style={{ animationDelay: "160ms" }}>
            I build full-stack web applications and intelligent, data-driven systems —
            from .NET Core backends and React-style frontends to machine learning models,
            RAG chatbots, and Power BI dashboards that turn raw data into decisions.
          </p>
          <div className="fade-up mt-8 flex flex-wrap gap-3" style={{ animationDelay: "240ms" }}>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30"
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
        </div>

        {/* Catchy photo card with floating badges */}
        <div className="relative sm:col-span-2">
          <div className="halo-glow absolute -inset-6 rounded-[2rem]" />
          <div className="fade-up relative mx-auto max-w-[260px] overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-2xl shadow-primary/10" style={{ animationDelay: "200ms" }}>
            <img
              src={portrait.url}
              alt="Youstina Salah Nathan"
              className="aspect-[3/4] w-full object-cover object-top"
            />
          </div>
          {/* floating skill badges */}
          <div className="float-soft absolute -left-4 top-6 hidden rounded-xl border border-border bg-card px-3 py-2 text-xs font-semibold text-foreground shadow-lg sm:flex sm:items-center sm:gap-1.5">
            <Code2 className="h-3.5 w-3.5 text-primary" /> .NET Core
          </div>
          <div className="float-soft-delayed absolute -right-3 top-1/3 hidden rounded-xl border border-border bg-card px-3 py-2 text-xs font-semibold text-foreground shadow-lg sm:flex sm:items-center sm:gap-1.5">
            <Brain className="h-3.5 w-3.5 text-primary" /> AI / ML
          </div>
          <div className="float-soft absolute -bottom-3 left-1/2 hidden -translate-x-1/2 rounded-xl border border-border bg-card px-3 py-2 text-xs font-semibold text-foreground shadow-lg sm:flex sm:items-center sm:gap-1.5">
            <BarChart3 className="h-3.5 w-3.5 text-primary" /> Power BI
          </div>
        </div>
      </section>

      {/* About */}
      <section className="fade-up">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">
          About
        </h2>
        <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
          <p>
            I'm a recent IT graduate and full-stack developer who loves turning messy data
            into clean, working software. I've built an AI-powered employment platform,
            a grounded RAG chatbot for maternal mental health (top 3 at a national
            hackathon), and full-stack .NET Core e-commerce apps.
          </p>
          <p>
            My toolkit spans the stack — Python and C# backends, SQL Server and Oracle
            databases, ML with scikit-learn and OpenCV, generative AI via Gemini and Claude
            APIs, and Power BI dashboards for KPI reporting. I'm trilingual, quick to pick
            up new tools, and happiest where engineering meets data and AI.
          </p>
        </div>
      </section>

      {/* Focus areas */}
      <section>
        <h2 className="fade-up font-display text-2xl font-semibold tracking-tight text-foreground">
          What I do
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            {
              title: "Full-Stack Web",
              icon: Code2,
              body: "ASP.NET Core MVC + Web API, EF Core, SQL Server, RESTful design, auth, and checkout flows.",
            },
            {
              title: "AI & Machine Learning",
              icon: Brain,
              body: "scikit-learn, OpenCV/MediaPipe, NLP, TF-IDF similarity, model evaluation, and RAG chatbots.",
            },
            {
              title: "Generative AI",
              icon: Sparkles,
              body: "Google Gemini & Anthropic Claude APIs, OpenAI Whisper, prompt engineering, and model fallback chains.",
            },
            {
              title: "Data & BI",
              icon: BarChart3,
              body: "Power BI dashboards with 8+ KPIs, advanced SQL, Pandas/NumPy, ETL, and statistical analysis.",
            },
          ].map((f, i) => (
            <div
              key={f.title}
              className="hover-scale fade-up rounded-xl border border-border bg-card p-5 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
              style={{ animationDelay: `${i * 90}ms` }}
            >
              <f.icon className="h-6 w-6 text-primary" />
              <h3 className="mt-3 font-display text-base font-semibold text-foreground">
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
      <section className="fade-up">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">
          Selected work
        </h2>
        <p className="mt-2 text-base text-muted-foreground">
          A few highlights.{" "}
          <Link to="/projects" className="font-semibold text-primary hover:underline">
            See all projects →
          </Link>
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            { name: "Jobify — AI Employment", tag: "Full-Stack · AI" },
            { name: "PostpartumRAG Chatbot", tag: "RAG · Top 3" },
            { name: "E-Commerce .NET App", tag: "Full-Stack" },
          ].map((p) => (
            <Link
              key={p.name}
              to="/projects"
              className="hover-scale group rounded-xl border border-border bg-card p-5 hover:border-primary/40"
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
