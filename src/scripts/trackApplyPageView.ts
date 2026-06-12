export interface TrackApplyPageViewConfig {
  readonly rootSelector: string;
  readonly eventName: string;
}

type GtagFunction = (
  command: "event",
  eventName: string,
  eventParams: Record<string, string>,
) => void;

interface AnalyticsWindow extends Window {
  readonly gtag?: GtagFunction;
}

export const trackApplyPageView = (config: TrackApplyPageViewConfig): void => {
  const applyRoot = document.querySelector(config.rootSelector);

  if (!(applyRoot instanceof HTMLElement) || applyRoot.dataset.analyticsInitialized === "true") {
    return;
  }

  applyRoot.dataset.analyticsInitialized = "true";

  const analyticsWindow = window as AnalyticsWindow;

  if (typeof analyticsWindow.gtag !== "function") {
    return;
  }

  analyticsWindow.gtag("event", config.eventName, {
    page_path: window.location.pathname,
    page_type: "apply",
  });
};
