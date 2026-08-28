import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Mail, Linkedin, Github, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Youstina, AI Engineer" },
      {
        name: "description",
        content:
          "Get in touch with Youstina about AI engineering, machine learning, and LLM application work.",
      },
      { property: "og:title", content: "Contact — Youstina, AI Engineer" },
      {
        property: "og:description",
        content:
          "Get in touch about AI engineering, machine learning, and LLM application work.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // Demo: no backend yet — wire to an email service or server function later.
    setTimeout(() => {
      setSending(false);
      toast.success("Thanks! Your message has been noted. I'll reply soon.");
      setForm({ name: "", email: "", message: "" });
    }, 700);
  };

  return (
    <div className="content-fade-in">
      <header className="mb-10">
        <h1 className="font-display text-4xl font-bold tracking-tight text-foreground">
          Contact
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Have a project, a role, or just a question about applied AI? I read every
          message and reply within a couple of days.
        </p>
      </header>

      <div className="grid gap-8 sm:grid-cols-5">
        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-xl border border-border bg-card p-6 sm:col-span-3"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label htmlFor="name" className="text-sm font-medium text-foreground">
                Name
              </label>
              <input
                id="name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30"
                placeholder="Your name"
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="email" className="text-sm font-medium text-foreground">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div className="space-y-1.5">
            <label htmlFor="message" className="text-sm font-medium text-foreground">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full resize-none rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30"
              placeholder="Tell me about the project or role…"
            />
          </div>
          <button
            type="submit"
            disabled={sending}
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60"
          >
            <Send className="h-4 w-4" />
            {sending ? "Sending…" : "Send message"}
          </button>
        </form>

        <div className="space-y-4 sm:col-span-2">
          <div className="rounded-xl border border-border bg-card p-6">
            <h2 className="font-display text-base font-semibold text-foreground">
              Direct
            </h2>
            <div className="mt-3 space-y-3 text-sm">
              <a
                href="mailto:hello@youstina.dev"
                className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4 text-primary" />
                hello@youstina.dev
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
              >
                <Linkedin className="h-4 w-4 text-primary" />
                LinkedIn
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
              >
                <Github className="h-4 w-4 text-primary" />
                GitHub
              </a>
            </div>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <h2 className="font-display text-base font-semibold text-foreground">
              Availability
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Currently open to AI engineering roles and contract work on LLM
              applications and production ML systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
