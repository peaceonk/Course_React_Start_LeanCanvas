/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_TEST_URL: string;
  readonly VITE_APP_TITLE: string;
  // 다른 환경변수도 여기에 추가
  readonly VITE_API_BASE_URL: string;
}
