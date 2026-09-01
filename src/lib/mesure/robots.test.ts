import { describe, expect, it } from "vitest";
import { estAutomate, reconnaitreRobot } from "./robots";

describe("reconnaitreRobot", () => {
  it("sépare le moissonnage d'entraînement de la lecture pour répondre", () => {
    // C'est LA distinction du volet IA. GPTBot lit pour un entraînement futur ;
    // ChatGPT-User lit parce que quelqu'un vient de poser une question. Les
    // additionner rendrait le chiffre inexploitable.
    expect(reconnaitreRobot("Mozilla/5.0 (compatible; GPTBot/1.2)")?.famille).toBe("ia_entrainement");
    expect(reconnaitreRobot("Mozilla/5.0 (compatible; ChatGPT-User/1.0)")?.famille).toBe("ia_reponse");
    expect(reconnaitreRobot("Mozilla/5.0 (compatible; PerplexityBot/1.0)")?.famille).toBe("ia_reponse");
    expect(reconnaitreRobot("Mozilla/5.0 (compatible; ClaudeBot/1.0)")?.famille).toBe("ia_entrainement");
    expect(reconnaitreRobot("Mozilla/5.0 (compatible; Claude-User/1.0)")?.famille).toBe("ia_reponse");
  });

  it("ne laisse pas Applebot-Extended passer pour Applebot", () => {
    expect(reconnaitreRobot("Applebot-Extended/1.0")?.famille).toBe("ia_entrainement");
    expect(reconnaitreRobot("Mozilla/5.0 (compatible; Applebot/0.1)")?.famille).toBe("moteur");
  });

  it("reconnaît un robot inconnu plutôt que de l'ignorer", () => {
    // Un moteur qui apparaît doit se voir le jour même, pas six mois après.
    const trouve = reconnaitreRobot("Mozilla/5.0 (compatible; NouveauMachinBot/2.0)");
    expect(trouve?.famille).toBe("autre");
    expect(trouve?.nom).toContain("bot");
  });

  it("laisse passer un vrai navigateur", () => {
    expect(
      reconnaitreRobot(
        "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1",
      ),
    ).toBeNull();
  });
});

describe("estAutomate", () => {
  it("repère la campagne de captures du dépôt", () => {
    // `scripts/captures-site.mjs` fait environ cent quarante pages en une
    // commande. Sans ce filtre, une session de captures serait la meilleure
    // journée d'audience de l'année.
    expect(estAutomate("Mozilla/5.0 HeadlessChrome/120.0.0.0 Safari/537.36")).toBe(true);
    expect(estAutomate("Mozilla/5.0 Chrome/120.0.0.0 Safari/537.36")).toBe(false);
  });
});
