export type TAction = {
  type: string | symbol;
  response?: any;
};

export type TActionRequest<T> = {
  type: string | symbol;
  params?: T;
};

export type TResponse<T> = {
  status: number;
  data: T;
  trace_id?: number | string;
};
