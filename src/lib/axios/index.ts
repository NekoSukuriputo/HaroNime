import Axios, { AxiosResponse, AxiosRequestConfig, AxiosError } from "axios";

import {
  AxiosCacheInstance,
  CacheAxiosResponse,
  CacheOptions,
  CacheRequestConfig,
  setupCache,
} from "axios-cache-interceptor";

export const handleRequest = (
  requestConfig: CacheRequestConfig
): CacheRequestConfig => {
  console.info(
    `[Request] ${requestConfig.method?.toUpperCase() || ""} | ${
      requestConfig.url || ""
    }`
  );
  return requestConfig;
};

export const handleRequestError = (error: AxiosError): Promise<AxiosError> => {
  console.error(
    `[Request Error] CODE ${error.code || "UNKNOWN"} | ${error.message}`
  );
  throw error;
};

export const handleResponse = (
  response: CacheAxiosResponse
): CacheAxiosResponse => {
  console.info(
    `[Request Response] ${response.config.method?.toUpperCase() || ""} | ${
      response.config.url || ""
    }`,
    response.data
  );
  return response;
};

export const handleResponseError = (error: AxiosError): Promise<AxiosError> => {
  console.error(
    `[ Response Error ] CODE ${error.code || "UNKNOWN"} | ${error.message}`
  );
  throw error;
};

export interface ClientArgs {
  /**
   * **EnableLogging**
   * Enables logging request responses.
   */
  enableLogging: boolean;
  /**
   * **Axios Cache Options**
   * Options for cache.
   * @see https://axios-cache-interceptor.js.org/#/pages/configuration
   */
  cacheOptions: Partial<CacheOptions>;
  /**
   * **Base URL**
   * Location of the JikanAPI. Leave empty to use the official JikanAPI instance.
   */
  baseURL: string;
}

export default class ApiService {
  api: AxiosCacheInstance;
  baseURL: string;
  constructor(clientOptions: Partial<ClientArgs> = {}) {
    this.baseURL = process.env.BASE_API_URL;
    this.api = setupCache(
      Axios.create({
        baseURL: this.baseURL,
        headers: {
          "Content-Type": "application/json",
        },
      }),
      clientOptions.cacheOptions
    );

    if (clientOptions.enableLogging) {
      this.addLoggingInterceptors();
    }
  }

  private addLoggingInterceptors(): void {
    this.api.interceptors.request.use(
      (config: CacheRequestConfig) => handleRequest(config),
      (error: AxiosError<string>) => handleRequestError(error)
    );

    this.api.interceptors.response.use(
      (response: CacheAxiosResponse) => handleResponse(response),
      (error: AxiosError<string>) => handleResponseError(error)
    );
  }
}
