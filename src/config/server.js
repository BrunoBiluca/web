export const host = process.env.HOST ?? '0.0.0.0';
export const port = process.env.PORT ?? 3000;
export const nodeEnv = process.env.NODE_ENV;
export const baseUrl = process.env.PUBLIC_URL;
export const backendPath = process.env.REACT_APP_BACKEND_PATH;
export const storagePath = process.env.REACT_APP_STORAGE_PATH;
export const isDebugMode = nodeEnv === "development"
