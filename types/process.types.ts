export interface ProcessResponse<T = undefined> {
  success: boolean;
  message: string;
  data: T;
}
