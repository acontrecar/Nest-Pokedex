export interface HtppAdapter {
  get<T>(url: string): Promise<T>;
}
