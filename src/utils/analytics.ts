export const GA_TRACKING_ID = "G-XXXXXXXXXX";

export const initGA = () => {
  if (typeof window !== "undefined" && GA_TRACKING_ID) {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    const gtag = (...args: any[]) => {
      window.dataLayer.push(args);
    };
    window.gtag = gtag;

    gtag("js", new Date());
    gtag("config", GA_TRACKING_ID, {
      page_title: document.title,
      page_location: window.location.href,
    });
  }
};

export const trackPageView = (url: string, title?: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", GA_TRACKING_ID, {
      page_path: url,
      page_title: title || document.title,
    });
  }
};

export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

export const trackFormSubmission = (formName: string) => {
  trackEvent("form_submit", "engagement", formName);
};

export const trackButtonClick = (buttonName: string, location?: string) => {
  trackEvent(
    "click",
    "button",
    `${buttonName}${location ? `_${location}` : ""}`
  );
};

export const trackLanguageChange = (language: string) => {
  trackEvent("language_change", "user_interaction", language);
};

export const trackCatalogCategory = (category: string) => {
  trackEvent("catalog_filter", "engagement", category);
};

export const trackContactForm = (action: "start" | "complete" | "error") => {
  trackEvent("contact_form", "engagement", action);
};

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export const FB_PIXEL_ID = process.env.REACT_APP_FB_PIXEL_ID || "";

export const initFacebookPixel = () => {
  if (
    typeof window !== "undefined" &&
    FB_PIXEL_ID &&
    FB_PIXEL_ID !== "" &&
    FB_PIXEL_ID !== "XXXXXXXXXXXXXXX"
  ) {
    const script = document.createElement("script");
    script.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '${FB_PIXEL_ID}');
      fbq('track', 'PageView');
    `;
    document.head.appendChild(script);
  }
};

export const trackFacebookEvent = (eventName: string, parameters?: any) => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", eventName, parameters);
  }
};

declare global {
  interface Window {
    fbq: (...args: any[]) => void;
  }
}

export const initAnalytics = () => {
  initGA();
  initFacebookPixel();
};
