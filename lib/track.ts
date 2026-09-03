import { site } from "./site";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

const send = (label: string) => {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", "conversion", { send_to: label });
};

export const trackCall = () => send(site.conversions.call);
export const trackWhatsapp = () => send(site.conversions.whatsapp);
export const trackForm = () => send(site.conversions.form);
