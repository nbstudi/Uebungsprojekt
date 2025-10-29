export interface ApiError {
  status: number;
  message: string;
  code?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
}

export type ApiResponse<T> = T | ApiError;
