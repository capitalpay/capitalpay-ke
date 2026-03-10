import { hasAnalyticsConsent } from './cookie-consent';

const w = (typeof window !== "undefined" ? (window as any) : undefined);

export function initializeAnalytics(opts?: { ga4Id?: string; metaPixelId?: string }) {
  if (typeof window === "undefined") return;
  if (!hasAnalyticsConsent()) return;

  const ga4Id = opts?.ga4Id || process.env.NEXT_PUBLIC_GA4_ID;
  const pixelId = opts?.metaPixelId || process.env.NEXT_PUBLIC_META_PIXEL_ID;

  // GA4
  if (ga4Id && !w?.gtag) {
    const s = document.createElement("script");
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${ga4Id}`;
    document.head.appendChild(s);
    w!.dataLayer = w!.dataLayer || [];
    w!.gtag = function () { w!.dataLayer.push(arguments); };
    w!.gtag("js", new Date());
    w!.gtag("config", ga4Id);
  }

  // Meta Pixel
  if (pixelId && !w?.fbq) {
    (function (f: any, b: Document, e: string, v: string) {
      if (f.fbq) return;
      const n: any = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      f.fbq = n;
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = true;
      n.version = "2.0";
      n.queue = [];
      const t = b.createElement(e) as HTMLScriptElement;
      t.async = true;
      t.src = v;
      const s = b.getElementsByTagName(e)[0];
      s.parentNode!.insertBefore(t, s);
    })(w, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
    w!.fbq("init", pixelId);
    w!.fbq("track", "PageView");
  }
}

export function trackEvent(eventName: string, parameters?: Record<string, any>) {
  if (typeof window === "undefined") return;
  if (!hasAnalyticsConsent()) return;

  // Google Analytics 4
  if (w?.gtag) {
    w.gtag('event', eventName, parameters);
  }

  // Meta Pixel
  if (w?.fbq) {
    w.fbq('track', eventName, parameters);
  }
}
