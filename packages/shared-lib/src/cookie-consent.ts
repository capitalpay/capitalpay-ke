export function hasAnalyticsConsent(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const v = localStorage.getItem("capitalpay-consent-analytics");
    return v === "true";
  } catch {
    return false;
  }
}

export function getCookieConsent(): { analytics: boolean; necessary: boolean; accepted?: boolean; marketing?: boolean } | null {
  if (typeof window === "undefined") return { analytics: false, necessary: true };
  try {
    const analytics = localStorage.getItem("capitalpay-consent-analytics") === "true";
    const necessary = localStorage.getItem("capitalpay-consent-necessary") !== "false";
    const accepted = localStorage.getItem("capitalpay-consent-accepted") === "true";
    const marketing = localStorage.getItem("capitalpay-consent-marketing") === "true";
    
    // Return null if no consent has been given yet
    if (!accepted && !analytics && !marketing) {
      return null;
    }
    
    return { analytics, necessary, accepted, marketing };
  } catch {
    return { analytics: false, necessary: true };
  }
}

export function setCookieConsent(consent: { analytics?: boolean; necessary?: boolean; accepted?: boolean; marketing?: boolean }): void {
  if (typeof window === "undefined") return;
  try {
    if (consent.analytics !== undefined) {
      localStorage.setItem("capitalpay-consent-analytics", consent.analytics.toString());
    }
    if (consent.necessary !== undefined) {
      localStorage.setItem("capitalpay-consent-necessary", consent.necessary.toString());
    }
    if (consent.accepted !== undefined) {
      localStorage.setItem("capitalpay-consent-accepted", consent.accepted.toString());
    }
    if (consent.marketing !== undefined) {
      localStorage.setItem("capitalpay-consent-marketing", consent.marketing.toString());
    }
  } catch {
    // Ignore localStorage errors
  }
}


