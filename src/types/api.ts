export interface ContactPayload {
  name:    string;
  email:   string;
  company: string;
  message: string;
}

export interface ApiResponse {
  success:   boolean;
  message?:  string;
  error?:    string;
  statusCode?: number;
}