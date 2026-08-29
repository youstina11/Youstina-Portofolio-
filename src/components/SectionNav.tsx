import { useEffect, useState } from "react";

export interface SectionLink {
  id: string;
  label: string;
}

export function SectionNav({ sections }: { sections: SectionLink[] }) {
  const [active, setActive] = useState<string>(sections[0]?.id ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 },
    );
    for (const s of sections) {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav
      aria-label="Page sections"
      className="sticky top-14 z-20 -mx-6 mb-10 border-b border-border/60 bg-background/90 px-6 py-3 backdrop-blur lg:top-0 lg:-mx-16 lg:px-16"
    >
      <ul className="flex gap-1 overflow-x-auto">
        {sections.map((s) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className={`whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-200 ${
                active === s.id
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-foreground"
              }`}
            >
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
