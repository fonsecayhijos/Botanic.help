import type { Locale } from "@/lib/i18n/types";

/**
 * System prompt for BotanicaHelp — general plant care only.
 * Never mention cannabis or illicit cultivation.
 */
export const BotanicaHelp_SYSTEM_PROMPT = `Eres BotanicaHelp: asistente de IA para el cuidado de plantas en Europa.

### Alcance (OBLIGATORIO)
- Ayudas con: frutas, verduras, huerto, balcón, plantas de interior, hierbas aromáticas, cítricos, tomates, lechugas, pimientos, etc.
- Temas: riego, humedad, luz, ubicación, plagas, carencias de nutrientes, sustrato, trasplante, estación del año, clima europeo.
- NUNCA hables de cannabis, marihuana, cáñamo industrial con fines de cultivo psicoactivo, ni de cultivos ilegales. Si te lo piden, rechaza en una línea y redirige a plantas legales de huerto o interior.
- No digas que eres un médico veterinario; la información es orientativa. El usuario es responsable del cuidado de sus plantas.

### Estilo
- Claro, práctico y amable. ~80–180 palabras por defecto; más solo si piden un plan detallado.
- Pasos numerados cuando haya acciones. Rangos útiles (días entre riegos, horas de sol, etc.).
- No repitas disclaimers largos en cada mensaje.
- No empieces siempre igual. Ve al grano.
- Una pregunta final solo si falta un dato crítico (especie, maceta/suelo, interior/exterior, síntomas).

### Fotos
Si hay foto: qué ves → diagnóstico probable → 2–4 acciones concretas.
No digas que “guardas” la foto de forma permanente: se analiza en la sesión.

### Formato
Listas cortas. **Negritas** en lo clave. Sin muros de texto ni emojis excesivos.`;

export function detectLanguage(userText: string, uiLocale: Locale): Locale {
  const t = userText.toLowerCase();
  const esHits =
    (t.match(
      /\b(hola|gracias|cómo|como|qué|que|planta|riego|luz|plaga|ayuda|foto|hojas|tomate|huerto|balcón|balcon)\b/g,
    )?.length ?? 0) + (t.match(/[áéíóúñ¿¡]/g)?.length ?? 0);
  const deHits =
    (t.match(
      /\b(hallo|danke|wie|was|pflanze|gießen|giessen|licht|hilfe|foto|blätter|tomate|garten|balkon)\b/g,
    )?.length ?? 0) + (t.match(/[äöüß]/g)?.length ?? 0);
  const enHits =
    t.match(
      /\b(hello|hi|thanks|how|what|plant|water|watering|light|pest|help|photo|leaves|tomato|garden|balcony)\b/g,
    )?.length ?? 0;

  if (esHits >= deHits && esHits >= enHits && esHits > 0) return "es";
  if (deHits >= esHits && deHits >= enHits && deHits > 0) return "de";
  if (enHits > esHits && enHits > deHits && enHits > 0) return "en";
  return uiLocale;
}

export function buildSystemPrompt(
  language: Locale,
  hasImages = false,
): string {
  const langLine =
    language === "de"
      ? "Antwortsprache: Deutsch. Kontext: Europa. Kurz und konkret."
      : language === "en"
        ? "Reply language: English. Context: Europe. Be concise and practical."
        : "Idioma de respuesta: español. Contexto: Europa. Sé breve y práctico.";

  const bits = [BotanicaHelp_SYSTEM_PROMPT, langLine];

  if (hasImages) {
    bits.push(
      language === "de"
        ? "Foto(s) vorhanden: kurz (sehen → Diagnose → 2–4 Schritte)."
        : language === "en"
          ? "Photo(s) attached: brief (see → likely diagnosis → 2–4 actions)."
          : "Hay foto(s): analiza breve (ver → diagnóstico → 2–4 acciones).",
    );
  }

  return bits.join("\n");
}

export function visionFallbackMessage(language: Locale): string {
  if (language === "de") {
    return "Foto erhalten, Analyse fehlgeschlagen. Welche Farbe, Flecken oder Schädlinge siehst du? Innen oder Balkon?";
  }
  if (language === "en") {
    return "I received the photo but couldn't analyse it. What colour, spots or pests do you see? Indoors or balcony?";
  }
  return "Recibí la foto, pero no pude analizarla. ¿Color, manchas o plagas? ¿Interior o balcón?";
}

export function photoDefaultPrompt(language: Locale, n: number): string {
  if (language === "de") {
    return n > 1
      ? `Analysiere diese ${n} Fotos meiner Pflanze: was siehst du, wahrscheinliche Ursache und was ich jetzt tun soll.`
      : "Analysiere dieses Foto meiner Pflanze: was siehst du, wahrscheinliche Ursache und was ich jetzt tun soll.";
  }
  if (language === "en") {
    return n > 1
      ? `Analyse these ${n} photos of my plant: what you see, likely cause, and what I should do now.`
      : "Analyse this photo of my plant: what you see, likely cause, and what I should do now.";
  }
  return n > 1
    ? `Analiza estas ${n} fotos de mi planta: qué ves, causa probable y qué debo hacer ahora.`
    : "Analiza esta foto de mi planta: qué ves, causa probable y qué debo hacer ahora.";
}
