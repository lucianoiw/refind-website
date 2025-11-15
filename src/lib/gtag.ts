export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || "";

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  if (!GA_MEASUREMENT_ID) return;

  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category?: string;
  label?: string;
  value?: number;
}) => {
  if (!GA_MEASUREMENT_ID) return;

  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Eventos específicos do Refind
export const trackWaitlistSignup = (source: string) => {
  event({
    action: "waitlist_signup",
    category: "conversion",
    label: source,
  });
};

export const trackCTAClick = (location: string) => {
  event({
    action: "cta_click",
    category: "engagement",
    label: location,
  });
};

export const trackScroll = (section: string) => {
  event({
    action: "scroll_to_section",
    category: "engagement",
    label: section,
  });
};

// Declare gtag on window
declare global {
  interface Window {
    gtag: (
      command: "config" | "event" | "consent" | "get" | "set",
      targetIdOrAction: string,
      config?: Record<string, unknown>
    ) => void;
  }
}
