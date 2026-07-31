/**
 * BotanicaHelp plans (aligned with landing prices).
 * free | huerto (9,99 €) | unlimited (19,99 €)
 * Limits are enforced client-side for now (localStorage).
 */

export type PlanId = "free" | "huerto" | "unlimited";

export type PlanLimits = {
  /** null = unlimited */
  messagesPerDay: number | null;
  /** null = unlimited photo analyses per month */
  photoAnalysesPerMonth: number | null;
  photosPerMessage: number;
};

export type PlanDefinition = {
  id: PlanId;
  priceMonthly: number;
  limits: PlanLimits;
};

export const PLAN_STORAGE_KEY = "botanicahelp_plan_v1";
export const PLAN_CHANGED_EVENT = "botanicahelp-plan-changed";

export const PLANS: Record<PlanId, PlanDefinition> = {
  free: {
    id: "free",
    priceMonthly: 0,
    limits: {
      messagesPerDay: 5,
      photoAnalysesPerMonth: 3,
      photosPerMessage: 1,
    },
  },
  huerto: {
    id: "huerto",
    priceMonthly: 9.99,
    limits: {
      messagesPerDay: 40,
      photoAnalysesPerMonth: 30,
      photosPerMessage: 2,
    },
  },
  unlimited: {
    id: "unlimited",
    priceMonthly: 19.99,
    limits: {
      messagesPerDay: null,
      photoAnalysesPerMonth: null,
      photosPerMessage: 4,
    },
  },
};

export const PLAN_ORDER: PlanId[] = ["free", "huerto", "unlimited"];

export function normalizePlanId(id: string | null | undefined): PlanId {
  if (id === "huerto" || id === "premium") return "huerto";
  if (id === "unlimited" || id === "super_premium" || id === "super") {
    return "unlimited";
  }
  return "free";
}

export function getPlan(id: string | null | undefined): PlanDefinition {
  return PLANS[normalizePlanId(id)];
}

export function getStoredPlanId(): PlanId {
  if (typeof window === "undefined") return "free";
  try {
    return normalizePlanId(localStorage.getItem(PLAN_STORAGE_KEY));
  } catch {
    return "free";
  }
}

export function setStoredPlanId(plan: PlanId): void {
  if (typeof window === "undefined") return;
  const id = normalizePlanId(plan);
  try {
    localStorage.setItem(PLAN_STORAGE_KEY, id);
  } catch {
    /* ignore */
  }
  window.dispatchEvent(
    new CustomEvent(PLAN_CHANGED_EVENT, { detail: { plan: id } }),
  );
}
