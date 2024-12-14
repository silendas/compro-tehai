export interface GtagEventParams {
    event_category?: string;
    event_label?: string;
    value?: number;
    [key: string]: string | number | boolean | undefined;
  }
  