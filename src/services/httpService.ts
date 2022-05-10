import axios, { AxiosInstance } from 'axios';

export type HttpService = AxiosInstance;

export function createHttpService(baseUrl: string) {
  return axios.create({
        baseURL: baseUrl,
    });
}