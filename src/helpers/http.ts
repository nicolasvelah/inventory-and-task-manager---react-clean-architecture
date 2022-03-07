/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-shadow */
/* eslint-disable max-classes-per-file */
import axios from 'axios';

export class HttpError {
  statusCode: number;

  message: string;

  data: any;

  constructor(statusCode: number, message: string, data: any) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
  }
}

export class HttpResponse<T> {
  error: HttpError | null;

  data: T | null;

  statusCode: number;

  constructor(data: { error: HttpError | null; data: T | null; statusCode: number }) {
    this.error = data.error;
    this.data = data.data;
    this.statusCode = data.statusCode;
  }

  static success<T>(data: T, statusCode: number): HttpResponse<T> {
    return new HttpResponse<T>({ data, error: null, statusCode });
  }

  static fail<T>(statusCode: number, message: string, data: any): HttpResponse<T> {
    return new HttpResponse<T>({
      data: null,
      error: new HttpError(statusCode, message, data),
      statusCode
    });
  }
}

export class Http {
  private baseUrl: string;

  private logs: boolean;

  constructor(baseUrl: string, logs = true) {
    this.baseUrl = baseUrl;

    this.logs = logs;
  }

  async request<T>(
    path: string,
    options?: {
      method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
      data?: any;
      headers?: any;
      parser?: (data: any) => T;
      logs?: boolean;
    }
  ): Promise<HttpResponse<T>> {
    let url: string | null = null;
    try {
      url = `${path.includes('http://') || path.includes('https://') ? path : this.baseUrl + path}`;

      const defaultHeaders = { 'Content-Type': 'application/json' };

      const method = options ? options.method || 'GET' : 'GET';
      const headers = options ? options.headers : defaultHeaders;
      const data = options ? options.data : undefined;

      const response = await axios({
        url,
        method,
        headers,
        data,
        timeout: 60000
      });

      const logs = options && options.logs !== undefined ? options.logs : this.logs;

      if (logs) {
        console.info('😉😉😉😉😉😉😉😉😉😉😉😉😉😉');
        const _request = {
          url,
          method,
          headers,
          data,
          statusCode: response.status,
          responseData: response.data
        };
        console.log('😉', JSON.stringify(_request, null, 2));
        console.info('😉😉😉😉😉😉😉😉😉😉😉😉😉😉');
      }

      if (options && options.parser) {
        const parsedData = options.parser(response.data);
        return HttpResponse.success<T>(parsedData, response.status);
      }

      return HttpResponse.success<T>(response.data, response.status);
    } catch (e: any) {
      console.log('😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡');
      console.error('❌ http request error:::', e.message);
      if (e.response) {
        console.error('❌ e.request.url', url);
        console.error('❌ e.request.method', e.request.method);
        console.error('❌ e.request.headers', e.config.headers);
        console.error('❌ e.request.data', e.config.data);
        console.error('❌ e.response.status', e.response.status);
        console.error('❌ e.response.data', e.response.data);
        console.log('😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡');
        return HttpResponse.fail<T>(e.response.status, e.message, e.response.data);
      }
      console.error('❌ error:::', e);
      console.log('😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡');
      return HttpResponse.fail<T>(500, e.message, '');
    }
  }
}
