declare module "google-tag-manager" {
  export interface Event {
    event: string;
    event_category: string;
    event_action: string;
    event_value: number;
    event_label: string;
  }

  export type DataLayer = Event[] | undefined;
}
