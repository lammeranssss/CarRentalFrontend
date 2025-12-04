import React, { useEffect, useRef } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import type { InternalAxiosRequestConfig } from "axios";
import { api } from "../../../../shared/api/client";

interface AxiosInterceptorProviderProps {
  children: React.ReactNode;
}

export const AxiosInterceptorProvider: React.FC<
  AxiosInterceptorProviderProps
> = ({ children }) => {
  const { getAccessTokenSilently, isAuthenticated } = useAuth0();
  const getTokenRef = useRef(getAccessTokenSilently);
  const isAuthenticatedRef = useRef(isAuthenticated);

  useEffect(() => {
    getTokenRef.current = getAccessTokenSilently;
    isAuthenticatedRef.current = isAuthenticated;
  }, [getAccessTokenSilently, isAuthenticated]);

  useEffect(() => {
    const requestInterceptor = api.interceptors.request.use(
      async (config: InternalAxiosRequestConfig) => {
        if (!isAuthenticatedRef.current) {
          return config;
        }

        try {
          const token = await getTokenRef.current();
          config.headers = config.headers ?? {};
          config.headers.Authorization = `Bearer ${token}`;
        } catch (error) {
          console.error("Error getting token", error);
        }

        return config;
      },
    );

    return () => {
      api.interceptors.request.eject(requestInterceptor);
    };
  }, []);

  return <>{children}</>;
};
