import React, { useMemo, useState } from "react";

const PROJECTS = [
  {
    id: "parkinsons",
    title: "Parkinson’s Tremor Monitoring",
    kind: "Personal",
    tagline: "Real-time embedded system for tremor analysis using inertial sensing + DSP.",
    tech: ["Embedded C/C++", "STM32", "I2C/SPI", "FFT", "DSP"],
    image: "/projects/parkinsons.jpg",
    details: {
      overview: [
        "Microcontroller-based system to acquire accelerometer/gyroscope data in real time.",
        "DSP pipeline isolates tremor bands and extracts dominant frequency + amplitude features.",
        "Designed for reliability under timing constraints with modular firmware.",
      ],
      built: [
        "Sensor drivers over I2C/SPI",
        "Real-time sampling + buffering",
        "Band-pass filtering + FFT feature extraction",
        "Feature extraction: amplitude + dominant frequency",
      ],
      future: [
        "More robust classification + thresholds",
        "Better visualization/logging",
        "Wireless upload for longitudinal tracking",
      ],
      links: [],
    },
  },
  {
    id: "triage",
    title: "Medical Auto-Triage System",
    kind: "Personal",
    tagline: "Hybrid NLP system routing symptom text to the appropriate medical specialty.",
    tech: ["Python", "NLP", "TF-IDF", "BERT"],
    image: "/projects/triage.jpg",
    details: {
      overview: [
        "Classifies free-text symptom descriptions into specialties (Cardiology, Neurology, etc.).",
        "Combines TF-IDF baseline with contextual BERT embeddings to improve accuracy.",
        "Built as a research prototype and proof-of-concept triage assistant.",
      ],
      built: [
        "Text preprocessing + feature pipeline",
        "TF-IDF baseline training + evaluation",
        "BERT embeddings integration",
        "Error analysis for ambiguous inputs",
      ],
      future: [
        "Confidence scoring for uncertain cases",
        "Dataset expansion + robustness tests",
        "Simple UI for intake + review",
      ],
      links: [],
    },
  },
];

function Section({ title, items }) {
  return (
    <div>
      <h4 className="text-sm font-semibold">{title}</h4>
      <ul className="mt-2 space-y-2 text-sm text-zinc-700">
        {items.map((x, i) => (
          <li key={i}>• {x}</li>
        ))}
      </ul>
    </div>
  );
}

function Modal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true">
      <button className="absolute inset-0 bg-zinc-900/40" onClick={onClose} aria-label="Close modal" />
      <div className="relative z-10 w-full max-w-3xl overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-xl">
        <div className="flex items-start justify-between gap-4 p-6">
          <div>
            <p className="text-xs font-medium text-accent-500">{project.kind}</p>
            <h3 className="mt-1 font-serif text-2xl">{project.title}</h3>
            <p className="mt-2 text-sm text-zinc-700">{project.tagline}</p>
          </div>
          <button onClick={onClose} className="rounded-xl border border-zinc-200 px-3 py-2 text-sm hover:border-zinc-300">
            ✕
          </button>
        </div>

        {project.image ? (
          <div className="border-y border-zinc-200 bg-zinc-50">
            <img src={project.image} alt={`${project.title} preview`} className="h-64 w-full object-cover" loading="lazy" />
          </div>
        ) : null}

        <div className="p-6">
          <div className="flex flex-wrap gap-2 text-xs">
            {project.tech.map((t) => (
              <span key={t} className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1">
                {t}
              </span>
            ))}
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            <Section title="Overview" items={project.details.overview} />
            <Section title="What I built" items={project.details.built} />
            <Section title="Future plans" items={project.details.future} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsGrid() {
  const [activeId, setActiveId] = useState(null);
  const active = useMemo(() => PROJECTS.find((p) => p.id === activeId), [activeId]);

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2">
        {PROJECTS.map((p) => (
          <button
            key={p.id}
            onClick={() => setActiveId(p.id)}
            className="group rounded-2xl border border-zinc-200 bg-white p-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300"
          >
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="font-serif text-xl">{p.title}</h3>
              <span className="text-xs font-medium text-zinc-500">{p.kind}</span>
            </div>
            <p className="mt-2 text-sm text-zinc-700">{p.tagline}</p>

            <div className="mt-4 flex flex-wrap gap-2 text-xs">
              {p.tech.slice(0, 4).map((t) => (
                <span key={t} className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1">
                  {t}
                </span>
              ))}
              {p.tech.length > 4 ? (
                <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1">+{p.tech.length - 4}</span>
              ) : null}
            </div>

            <p className="mt-4 text-sm underline decoration-accent-500/40 group-hover:decoration-accent-500">
              View details
            </p>
          </button>
        ))}
      </div>

      <Modal project={active} onClose={() => setActiveId(null)} />
    </>
  );
}
