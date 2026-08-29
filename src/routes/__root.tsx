import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Github, Linkedin, Mail, Menu, X, MapPin, Download } from "lucide-react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Toaster } from "@/components/ui/sonner";
import portrait from "@/assets/youstina-portrait.png.asset.json";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "Skills & Experience", to: "/skills" },
  { label: "Writing", to: "/blog" },
  { label: "Contact", to: "/contact" },
] as const;

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Youstina Salah — Full-Stack & AI Engineer" },
      {
        name: "description",
        content:
          "Youstina Salah Nathan — full-stack developer and AI engineer building data-driven applications with .NET Core, Python, and machine learning.",
      },
      { name: "author", content: "Youstina Salah Nathan" },
      { property: "og:title", content: "Youstina Salah — Full-Stack & AI Engineer" },
      {
        property: "og:description",
        content:
          "Full-stack developer and AI engineer building data-driven applications with .NET Core, Python, and machine learning.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function Sidebar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <aside className="sidebar-bg-grad flex h-full w-full flex-col overflow-y-auto text-sidebar-foreground">
      <div className="flex flex-col items-center px-6 pt-12 pb-7 text-center">
        {/* Catchy photo treatment */}
        <div className="relative mb-5">
          <div className="halo-glow absolute inset-0 -m-3 rounded-full" />
          <div className="ring-pulse relative h-28 w-28 overflow-hidden rounded-full border-2 border-sidebar-primary/60 bg-sidebar-accent shadow-xl">
            <img
              src={portrait.url}
              alt="Youstina Salah Nathan"
              className="h-full w-full object-cover object-top"
            />
          </div>
          <span className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full border-4 border-sidebar bg-sidebar-primary" />
        </div>
        <h1 className="font-display text-xl font-semibold tracking-tight text-sidebar-foreground">
          Youstina Salah
        </h1>
        <p className="mt-1 text-sm font-medium text-sidebar-primary">
          Full-Stack & AI Engineer
        </p>
        <p className="mt-2 inline-flex items-center gap-1 text-xs text-sidebar-foreground/75">
          <MapPin className="h-3 w-3" /> Assiut, Egypt
        </p>
        <a
          href="/Youstina-Salah-Nathan-CV.pdf"
          download
          className="mt-5 inline-flex items-center gap-2 rounded-lg bg-sidebar-primary px-4 py-2 text-sm font-semibold text-sidebar-primary-foreground transition-all duration-200 hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sidebar-ring"
        >
          <Download className="h-4 w-4" />
          Download CV
        </a>
      </div>


      <nav className="px-4">
        <ul className="space-y-1">
          {navItems.map((item, i) => {
            const active =
              item.to === "/"
                ? pathname === "/"
                : pathname.startsWith(item.to);
            return (
              <li key={item.to} className="fade-up" style={{ animationDelay: `${i * 70}ms` }}>
                <Link
                  to={item.to}
                  className={`flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                    active
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-sidebar-foreground/85 hover:bg-sidebar-accent hover:translate-x-1 hover:text-sidebar-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="mt-auto px-6 py-8">
        <div className="mb-4 h-px w-full bg-sidebar-border" />
        <div className="flex items-center justify-center gap-5 text-sidebar-foreground/80">
          <a
            href="https://github.com/YoustinaSalah"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="transition-all duration-200 hover:scale-110 hover:text-sidebar-primary"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/youstina-salah-nathan"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="transition-all duration-200 hover:scale-110 hover:text-sidebar-primary"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:youstenasalah123@gmail.com"
            aria-label="Email"
            className="transition-all duration-200 hover:scale-110 hover:text-sidebar-primary"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
        <p className="mt-4 text-center text-[11px] text-sidebar-foreground/70">
          © {new Date().getFullYear()} Youstina Salah
        </p>
      </div>
    </aside>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster position="bottom-right" />
      <div className="min-h-screen bg-background">
        {/* Desktop sidebar */}
        <div className="fixed inset-y-0 left-0 z-30 hidden w-72 lg:block">
          <Sidebar />
        </div>

        {/* Mobile top bar */}
        <div className="sticky top-0 z-40 flex items-center justify-between border-b border-sidebar-border bg-sidebar px-4 py-3 text-sidebar-foreground lg:hidden">
          <Link to="/" className="font-display text-lg font-semibold">
            Youstina Salah
          </Link>
          <button
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            className="rounded-md p-2 text-sidebar-foreground hover:bg-sidebar-accent"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>

        {/* Mobile drawer */}
        {mobileOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => setMobileOpen(false)}
            />
            <div className="absolute inset-y-0 left-0 w-72 max-w-[80%]">
              <Sidebar />
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="absolute right-3 top-3 rounded-md p-2 text-sidebar-foreground/70 hover:bg-sidebar-accent"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        )}

        {/* Main content */}
        <main className="lg:pl-72">
          <div className="mx-auto max-w-4xl px-6 py-12 lg:px-16 lg:py-20">
            <Outlet />
          </div>
        </main>
      </div>
    </QueryClientProvider>
  );
}
