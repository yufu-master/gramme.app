"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { trackEvent } from "@/lib/analytics";
import type { Integration } from "@/lib/integrations";

const STORAGE_KEY = "gramme_integration_votes";

function readVotes(): Record<string, number> {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw) as Record<string, number>;
  } catch {
    return {};
  }
}

function writeVotes(votes: Record<string, number>) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(votes));
}

export function IntegrationLogo({ integration, size = 48 }: { integration: Integration; size?: number }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span
        className="inline-flex shrink-0 items-center justify-center rounded-xl bg-[#264021] text-sm font-black text-[#a8cf8c]"
        style={{ width: size, height: size }}
        aria-hidden
      >
        {integration.initial}
      </span>
    );
  }

  return (
    <span
      className="relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[#e8f0e2] bg-white"
      style={{ width: size, height: size }}
    >
      <Image
        src={integration.logo}
        alt={`Logo ${integration.name}`}
        width={size}
        height={size}
        className="object-contain p-1.5"
        onError={() => setFailed(true)}
      />
    </span>
  );
}

export function IntegrationCard({ integration }: { integration: Integration }) {
  const [votes, setVotes] = useState(0);
  const [voted, setVoted] = useState(false);

  useEffect(() => {
    const all = readVotes();
    setVotes(all[integration.id] ?? 0);
    setVoted(Boolean(window.localStorage.getItem(`gramme_voted_${integration.id}`)));
  }, [integration.id]);

  const handleVote = () => {
    if (voted) return;
    const all = readVotes();
    const next = (all[integration.id] ?? 0) + 1;
    all[integration.id] = next;
    writeVotes(all);
    window.localStorage.setItem(`gramme_voted_${integration.id}`, "1");
    setVotes(next);
    setVoted(true);
    trackEvent("integration_vote", { tool: integration.id });
  };

  return (
    <article className="flex flex-col rounded-2xl border border-[#dcead2] bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <IntegrationLogo integration={integration} size={56} />
          <div>
            <h3 className="text-lg font-bold text-[#2f4f26]">{integration.name}</h3>
            <p className="mt-0.5 inline-flex rounded-full bg-[#a8cf8c]/25 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-[#355329]">
              Bientôt disponible
            </p>
          </div>
        </div>
      </div>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-[#4d6952]">{integration.blurb}</p>
      <div className="mt-5 flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={handleVote}
          disabled={voted}
          className={`rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
            voted
              ? "cursor-default bg-[#f6fbf2] text-[#6e9f55]"
              : "bg-[#264021] text-white hover:bg-[#1f341a]"
          }`}
        >
          {voted ? "Vote enregistré" : "Voter pour cette intégration"}
        </button>
        <Link
          href={`/contact?sujet=${encodeURIComponent("Autre")}&integration=${encodeURIComponent(integration.name)}`}
          className="rounded-xl border border-[#d8e6cf] px-4 py-2.5 text-sm font-semibold text-[#355329] transition hover:bg-[#f6fbf2]"
        >
          En parler
        </Link>
        {votes > 0 ? (
          <span className="text-xs text-[var(--muted-foreground)]">
            {votes} vote{votes > 1 ? "s" : ""} sur cet appareil
          </span>
        ) : null}
      </div>
    </article>
  );
}
