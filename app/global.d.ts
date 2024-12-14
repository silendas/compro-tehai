export {};

declare global {
  interface Window {
    gtag: (
      command: "config" | "event",
      targetId: string,
      params?: GtagConfigParams | GtagEventParams
    ) => void;
  }
}

interface GtagConfigParams {
  page_path?: string;
  send_page_view?: boolean;
  [key: string]: string | number | boolean | undefined;
}

interface GtagEventParams {
  event_category?: string;
  event_label?: string;
  value?: number;
  [key: string]: string | number | boolean | undefined;
}
