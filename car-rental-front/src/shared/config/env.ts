const getRequiredEnv = (key: keyof ImportMetaEnv): string => {
  const value = import.meta.env[key];
  if (!value) {
    throw new Error(`Missing environment variable: ${key}`);
  }
  return value;
};

export const env = {
  apiUrl: import.meta.env.VITE_API_URL ?? "http://localhost:8080",
  auth0Domain: getRequiredEnv("VITE_AUTH0_DOMAIN"),
  auth0ClientId: getRequiredEnv("VITE_AUTH0_CLIENT_ID"),
  auth0Audience: import.meta.env.VITE_AUTH0_AUDIENCE ?? "",
};
