// Export analytics and cookie-consent utilities
export { initializeAnalytics, trackEvent } from './analytics';
export { hasAnalyticsConsent } from './cookie-consent';

// Cookie Consent Management
export interface CookieConsentOptions {
  necessary?: boolean;
  analytics?: boolean;
  marketing?: boolean;
  preferences?: boolean;
}

export interface CookieConsentState {
  hasConsented: boolean;
  consentDate?: Date;
  preferences: CookieConsentOptions;
}

const COOKIE_CONSENT_KEY = 'capitalpay-cookie-consent';

export const cookieConsent = {
  // Get current consent state
  getConsent(): CookieConsentState {
    if (typeof window === 'undefined') {
      return {
        hasConsented: false,
        preferences: {
          necessary: true,
          analytics: false,
          marketing: false,
          preferences: false,
        },
      };
    }

    try {
      const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        return {
          ...parsed,
          consentDate: parsed.consentDate ? new Date(parsed.consentDate) : undefined,
        };
      }
    } catch (error) {
      console.warn('Failed to parse cookie consent data:', error);
    }

    return {
      hasConsented: false,
      preferences: {
        necessary: true,
        analytics: false,
        marketing: false,
        preferences: false,
      },
    };
  },

  // Set consent preferences
  setConsent(preferences: CookieConsentOptions): void {
    if (typeof window === 'undefined') return;

    const consentState: CookieConsentState = {
      hasConsented: true,
      consentDate: new Date(),
      preferences: {
        necessary: true, // Always true
        analytics: preferences.analytics || false,
        marketing: preferences.marketing || false,
        preferences: preferences.preferences || false,
      },
    };

    try {
      localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consentState));
    } catch (error) {
      console.warn('Failed to save cookie consent data:', error);
    }
  },

  // Clear consent (for testing or user request)
  clearConsent(): void {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(COOKIE_CONSENT_KEY);
  },

  // Check if specific consent type is granted
  hasConsentFor(type: keyof CookieConsentOptions): boolean {
    const consent = this.getConsent();
    return consent.hasConsented && (consent.preferences[type] || false);
  },
};

// Analytics Wrappers
export interface AnalyticsEvent {
  name: string;
  properties?: Record<string, any>;
  timestamp?: Date;
}

export interface AnalyticsUser {
  id?: string;
  email?: string;
  properties?: Record<string, any>;
}

export const analytics = {
  // Initialize analytics (no-op for now)
  init(config?: Record<string, any>): void {
    console.log('Analytics initialized with config:', config);
  },

  // Track an event
  track(event: AnalyticsEvent): void {
    if (!cookieConsent.hasConsentFor('analytics')) {
      console.log('Analytics tracking skipped - no consent');
      return;
    }

    console.log('Analytics event tracked:', {
      ...event,
      timestamp: event.timestamp || new Date(),
    });
  },

  // Identify a user
  identify(user: AnalyticsUser): void {
    if (!cookieConsent.hasConsentFor('analytics')) {
      console.log('Analytics identify skipped - no consent');
      return;
    }

    console.log('Analytics user identified:', user);
  },

  // Set user properties
  setUserProperties(properties: Record<string, any>): void {
    if (!cookieConsent.hasConsentFor('analytics')) {
      console.log('Analytics setUserProperties skipped - no consent');
      return;
    }

    console.log('Analytics user properties set:', properties);
  },

  // Track page view
  page(name?: string, properties?: Record<string, any>): void {
    this.track({
      name: 'page_view',
      properties: {
        page_name: name || (typeof window !== 'undefined' ? window.location.pathname : ''),
        ...properties,
      },
    });
  },

  // Track conversion
  conversion(name: string, value?: number, properties?: Record<string, any>): void {
    this.track({
      name: 'conversion',
      properties: {
        conversion_name: name,
        conversion_value: value,
        ...properties,
      },
    });
  },
};

// Utility Functions
export const utils = {
  // Format currency
  formatCurrency(amount: number, currency: string = 'USD', locale: string = 'en-US'): string {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
    }).format(amount);
  },

  // Format date
  formatDate(date: Date, locale: string = 'en-US', options?: Intl.DateTimeFormatOptions): string {
    return new Intl.DateTimeFormat(locale, options).format(date);
  },

  // Generate random ID
  generateId(prefix: string = 'id'): string {
    return `${prefix}_${Math.random().toString(36).substr(2, 9)}`;
  },

  // Debounce function
  debounce<T extends (...args: any[]) => any>(
    func: T,
    wait: number
  ): (...args: Parameters<T>) => void {
    let timeout: ReturnType<typeof setTimeout>;
    return (...args: Parameters<T>) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  },

  // Throttle function
  throttle<T extends (...args: any[]) => any>(
    func: T,
    limit: number
  ): (...args: Parameters<T>) => void {
    let inThrottle: boolean;
    return (...args: Parameters<T>) => {
      if (!inThrottle) {
        func(...args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  },
};

// Validation helpers
export const validation = {
  // Email validation
  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  // Phone validation (basic)
  isValidPhone(phone: string): boolean {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  },

  // URL validation
  isValidUrl(url: string): boolean {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  },

  // Required field validation
  isRequired(value: any): boolean {
    if (typeof value === 'string') {
      return value.trim().length > 0;
    }
    return value !== null && value !== undefined;
  },
};


