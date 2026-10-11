"use client";

import { Expand, X } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { architectureDiagrams } from "@/data/architecture";
import { ArchitectureDiagram } from "@/components/projects/architecture-diagram";
import type { ArchitectureDiagramData } from "@/data/architecture";

export function ArchitectureDialog({ diagramId }: { diagramId: ArchitectureDiagramData["id"] }) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const titleId = useId();
  const diagram = architectureDiagrams[diagramId];

  useEffect(() => {
    if (!isOpen) return;

    const trigger = triggerRef.current;
    const previousOverflow = document.body.style.overflow;
    const previousRootOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    closeRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        setIsOpen(false);
        return;
      }
      if (event.key !== "Tab") return;

      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
        'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable?.length) {
        event.preventDefault();
        dialogRef.current?.focus();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      document.documentElement.style.overflow = previousRootOverflow;
      trigger?.focus();
    };
  }, [isOpen]);

  return (
    <section aria-labelledby={`${titleId}-section`} className="architecture-section" id="architecture-diagram">
      <div className="architecture-section-heading">
        <div>
          <p className="eyebrow">SYSTEM MAP</p>
          <h2 id={`${titleId}-section`}>Architecture</h2>
          <p>{diagram.summary}</p>
        </div>
        <div className="architecture-preview-frame">
          <div
            aria-haspopup="dialog"
            aria-label={`View full architecture: ${diagram.title}. Scroll to inspect the preview.`}
            className="architecture-preview-scroll"
            onClick={(event) => {
              triggerRef.current = event.currentTarget;
              setIsOpen(true);
            }}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                triggerRef.current = event.currentTarget;
                setIsOpen(true);
              }
            }}
            role="button"
            tabIndex={0}
          >
            <ArchitectureDiagram diagram={diagram} />
          </div>
          <button
            aria-label={`View full architecture: ${diagram.title}`}
            className="architecture-preview-action"
            onClick={(event) => {
              triggerRef.current = event.currentTarget;
              setIsOpen(true);
            }}
            type="button"
          >
            <Expand aria-hidden="true" size={16} /> View full architecture
          </button>
        </div>
      </div>
      <ul className="architecture-notes">
        {diagram.notes.map((note) => <li key={note}>{note}</li>)}
      </ul>
      {isOpen && (
        <div
          className="architecture-backdrop"
          onClick={(event) => {
            if (event.target === event.currentTarget) setIsOpen(false);
          }}
        >
          <div
            aria-labelledby={titleId}
            aria-modal="true"
            className="architecture-dialog"
            onClick={(event) => event.stopPropagation()}
            ref={dialogRef}
            role="dialog"
            tabIndex={-1}
          >
            <div className="architecture-dialog-header">
              <div>
                <p className="eyebrow">FULL-SIZE SYSTEM MAP</p>
                <h2 id={titleId}>{diagram.title}</h2>
              </div>
              <button
                aria-label="Close architecture diagram"
                className="icon-button architecture-close"
                onClick={() => setIsOpen(false)}
                ref={closeRef}
                type="button"
              >
                <X aria-hidden="true" size={20} />
              </button>
            </div>
            <div aria-label="Scrollable architecture diagram" className="architecture-dialog-scroll" tabIndex={0}>
              <ArchitectureDiagram diagram={diagram} />
            </div>
            <ul className="architecture-notes architecture-dialog-notes">
              {diagram.notes.map((note) => <li key={note}>{note}</li>)}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}