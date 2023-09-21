import axios, { AxiosError, AxiosPromise, AxiosRequestConfig } from 'axios';

const httpBaseInstance = axios.create({
  baseURL: 'https://dog.ceo/api/',
  timeout: 30000
});

export interface RequestConfig extends AxiosRequestConfig {
  Authorization?: string;
}

export type AxiosErrorExtraConfig = {
  config: {
    sent?: boolean;
  };
  response: {
    status?: number;
  };
};

export type ResponseInterceptor = (err: AxiosError & AxiosErrorExtraConfig) => Promise<never> | AxiosPromise<any>;

export type RequestInterceptor = (config: AxiosRequestConfig<any>) => RequestConfig;

const interceptorsV2 = {
  interceptorReq: -1,
  interceptorRes: -1
};

export { interceptorsV2 };

export default httpBaseInstance;
