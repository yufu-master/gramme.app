import { defineConfig } from "vitest/config";
import { resolve } from "node:path";

// Les tests portent sur la logique PURE de la mesure : classement des canaux,
// reconnaissance des robots, normalisation des chemins. Rien qui touche au DOM,
// donc pas d'environnement de navigateur à monter.
export default defineConfig({
  resolve: { alias: { "@": resolve(__dirname, "src") } },
  test: { environment: "node", include: ["src/**/*.test.ts"] },
});
