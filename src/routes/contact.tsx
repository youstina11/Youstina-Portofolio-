import { Reveal } from "@/components/Reveal";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Mail, Linkedin, Github, Send, Phone, MapPin, Download } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Youstina Salah" },
      {
        name: "description",
        content:
          "Get in touch with Youstina Salah Nathan about full-stack, AI engineering, and data analysis opportunities.",
      },
      { property: "og:title", content: "Contact — Youstina Salah" },
      {
        property: "og:description",
        content:
          "Get in touch about full-stack, AI engineering, and data analysis opportunities.",
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
      <Reveal as="header" className="mb-10">
        <h1 className="font-display text-4xl font-bold tracking-tight text-foreground">
          Contact
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Have a role, a project, or a question about full-stack, AI, or data work? I read
          every message and reply within a couple of days.
        </p>
        <a
          href="/Youstina-Salah-Nathan-CV.pdf"
          download
          className="mt-5 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
        >
          <Download className="h-4 w-4" />
          Download my CV (PDF)
        </a>
      </Reveal>

      <Reveal className="grid gap-8 sm:grid-cols-5" delay={80}>

        <form
          onSubmit={handleSubmit}
          className="fade-up space-y-4 rounded-xl border border-border bg-card p-6 sm:col-span-3"
          style={{ animationDelay: "80ms" }}
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
              placeholder="Tell me about the role or project…"
            />
          </div>
          <button
            type="submit"
            disabled={sending}
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30 disabled:opacity-60"
          >
            <Send className="h-4 w-4" />
            {sending ? "Sending…" : "Send message"}
          </button>
        </form>

        <div className="fade-up space-y-4 sm:col-span-2" style={{ animationDelay: "160ms" }}>
          <div className="hover-scale rounded-xl border border-border bg-card p-6 hover:border-primary/40">
            <h2 className="font-display text-base font-semibold text-foreground">
              Direct
            </h2>
            <div className="mt-3 space-y-3 text-sm">
              <a
                href="mailto:youstenasalah123@gmail.com"
                className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4 text-primary" />
                youstenasalah123@gmail.com
              </a>
              <a
                href="tel:+201007497154"
                className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
              >
                <Phone className="h-4 w-4 text-primary" />
                +20 100 749 7154
              </a>
              <p className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                Assiut, Egypt
              </p>
              <a
                href="https://www.linkedin.com/in/youstina-salah-nathan"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
              >
                <Linkedin className="h-4 w-4 text-primary" />
                LinkedIn
              </a>
              <a
                href="https://github.com/YoustinaSalah"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
              >
                <Github className="h-4 w-4 text-primary" />
                GitHub
              </a>
            </div>
          </div>
          <div className="hover-scale rounded-xl border border-border bg-card p-6 hover:border-primary/40">
            <h2 className="font-display text-base font-semibold text-foreground">
              Availability
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Open to full-stack, AI engineering, and data analysis roles and projects.
              Trilingual (Arabic, English, French) and comfortable working remotely.
            </p>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
