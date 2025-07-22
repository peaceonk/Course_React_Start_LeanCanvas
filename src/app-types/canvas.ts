export type Tdata = {
  id: number;
  title: string;
  lastModified: string;
  category: string;
};
export interface TNote {
  id: string;
  content: string;
}

export type searchPrams = {
  title_like: string;
  _sort?: string;
  _order?: string;
};

// 응답전 재호출시 react 오류 관련 Controller abort 처리
export type apiDefaultParams = {
  signal: AbortSignal;
};

export type apiError = {
  code?: number;
  message?: string;
};
