"use client";

import { useState } from "react";
import { faqItems } from "@/lib/seo";

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mt-8 space-y-3">
      {faqItems.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;

        return (
          <div key={item.q} className="overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-sm">
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="text-base font-bold text-[#264021] sm:text-lg">{item.q}</span>
                <span
                  aria-hidden
                  className={`inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-[#a8cf8c]/25 text-[#355329] transition ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className={isOpen ? "border-t border-[var(--border)] px-5 pb-5 pt-3" : undefined}
            >
              {/* La réponse est TOUJOURS écrite, et c'est `hidden` qui la
                  masque. Le `{isOpen && …}` d'avant l'empêchait d'exister :
                  mesuré le 06/09/2026 sur le HTML réellement servi, UNE seule
                  réponse sur onze s'y trouvait. Les dix autres ne vivaient que
                  dans le balisage FAQPage, invisible à la lecture. Un moteur
                  qui n'exécute pas le JavaScript, et une IA qui lit le HTML,
                  ne voyaient que les questions.

                  `hidden` suffit : il masque, il ne démonte pas, et le lecteur
                  d'écran suit l'état déclaré par `aria-expanded`. */}
              <p className="text-[var(--muted-foreground)]">{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
