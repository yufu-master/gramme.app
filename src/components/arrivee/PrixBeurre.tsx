"use client";

import { useState } from "react";
import { CROISSANT, margeCroissant } from "@/lib/croissant-beurre";

const euros = (n: number, decimales: number) =>
  n.toLocaleString("fr-FR", { minimumFractionDigits: decimales, maximumFractionDigits: decimales });

/** La chaîne de Gramme, tenue dans le pouce : un prix d'achat bouge, la marge suit. */
export function PrixBeurre() {
  const [prix, setPrix] = useState<number>(CROISSANT.prixBeurreReference);
  const r = margeCroissant(prix);
  const ecart = Math.round(r.ecartSurMille);

  return (
    <div className="mt-8 lg:mt-0">
      <label htmlFor="prix-beurre" className="block text-lg font-semibold">
        Beurre de tourage : <span className="tabular-nums font-black">{euros(prix, 2)} € le kilo</span>
      </label>
      <input
        id="prix-beurre"
        type="range"
        min={7}
        max={14}
        step={0.1}
        value={prix}
        onChange={(e) => setPrix(Number(e.target.value))}
        className="carte-curseur mt-4 w-full"
      />
      <div aria-live="polite" className="mt-8">
        <p className="text-lg font-semibold">Il vous reste, par croissant</p>
        <p className="mt-1 text-7xl font-black leading-none tracking-tight tabular-nums sm:text-8xl">{euros(r.marge, 3)} €</p>
        <p className="mt-4 text-lg tabular-nums">
          Soit {euros(r.margePct, 1)} % de marge
          {ecart !== 0 && (
            <>
              , et {ecart > 0 ? "+" : "−"}
              {euros(Math.abs(ecart), 0)} € sur mille croissants
            </>
          )}
          .
        </p>
      </div>
    </div>
  );
}
