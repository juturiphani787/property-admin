export interface ApiResponse {
  id: string;
  ts: string;
  items?:any;
  response: {
    code: string,
    message?: string,
    data?: any,
    error?: any;
    items?:any;
  };
}
