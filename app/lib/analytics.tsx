import { GtagEventParams } from "@app/types/gtag";

export const logEvent = (action: string, params: GtagEventParams = {}) => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", action, params);
    }
  };
  