import { Reveal } from "@/components/Reveal";
import { SectionNav } from "@/components/SectionNav";
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
      { property: "og:url", content: "https://my-spotlight-showcase-016.lovable.app" },
      { property: "og:site_name", content: "Youstina Salah Portfolio" },
    ],
    links: [{ rel: "canonical", href: "https://my-spotlight-showcase-016.lovable.app" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="content-fade-in">
      <SectionNav
        sections={[
          { id: "hero", label: "Intro" },
          { id: "about", label: "About" },
          { id: "what-i-do", label: "What I do" },
          { id: "selected-work", label: "Selected work" },
        ]}
      />
      <div className="space-y-20">
      {/* Hero */}
      <Reveal id="hero" as="section" className="relative scroll-mt-28 grid items-center gap-10 sm:grid-cols-5">
        {/* animated pastel background blobs */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-visible">
          <div className="blob-pink absolute -left-16 -top-16 h-56 w-56 rounded-full opacity-70" />
          <div className="blob-butter absolute -right-10 top-24 h-64 w-64 rounded-full opacity-60" />
          <div className="blob-pink absolute bottom-0 left-1/3 h-40 w-40 rounded-full opacity-50" />
        </div>
        <div className="sm:col-span-3">

          <div className="fade-up inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Full-Stack · AI Engineer · Data Analyst
          </div>
          <h1 className="fade-up mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl" style={{ animationDelay: "80ms" }}>
            Hi, I'm Youstina.
            <span className="text-gradient block">AI Engineer & Data Analyst.</span>
          </h1>
          <p className="fade-up mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground" style={{ animationDelay: "160ms" }}>
            I build full-stack web applications and intelligent, data-driven systems —
            from .NET Core backends and React-style frontends to applied machine learning
            models, RAG chatbots, and Power BI dashboards that turn raw data into decisions.
            My focus is the AI and data field: training ML models with scikit-learn and
            OpenCV, shipping generative AI via Gemini and Claude, and delivering analytics
            that make data actually useful.
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
          <div className="photo-ring absolute -inset-5 mx-auto max-w-[300px] rounded-[2rem] opacity-70" />
          <div className="halo-glow absolute -inset-6 rounded-[2rem]" />
          <div className="photo-anim fade-up relative mx-auto max-w-[260px] overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-2xl shadow-primary/10" style={{ animationDelay: "200ms" }}>
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
      </Reveal>

      {/* About */}
      <Reveal id="about" as="section" className="scroll-mt-28">
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
      </Reveal>

      {/* Focus areas */}
      <Reveal id="what-i-do" as="section" className="scroll-mt-28">
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
      </Reveal>

      {/* Selected work teaser */}
      <Reveal id="selected-work" as="section" className="scroll-mt-28">
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
            { name: "PostpartumRAG Chatbot", tag: "RAG · Top 2" },
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
      </Reveal>
      </div>
    </div>
  );
}
