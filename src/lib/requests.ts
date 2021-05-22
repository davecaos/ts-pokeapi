import fetch from 'node-fetch';
import isHttpError from './http';
import httpContext from 'express-http-context';

type TResponse = {
  data?: any;
  status: number;
  statusText?: string;
};

const get = async (url: string, header?: any): Promise<TResponse> => {
  //extract headers from httpContext
  const headers = header || httpContext.get('header');

  //make body
  const options = {
    method: 'GET',
    headers,
  };

  //send headers and request to URL
  const response = await fetch(url, options);
  const { status } = response;

  //check if the request is not success, launch a exception.
  if (status && isHttpError(status)) return { statusText: response.statusText, status };

  const data = await response.json();

  return { data, status };
};

const post = async (url: string, body: any, headers?: any): Promise<TResponse> => {
  const options = {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };

  //send headers and request to URL
  const response = await fetch(url, options);

  const { status } = response;

  //check if the request is not success, launch a exception.
  if (status && isHttpError(status)) return { statusText: response.statusText, status };
  const data = await response.json();
  return { data, status };
};

const patch = async (url: string, body: any, headers?: any): Promise<TResponse> => {
  const options = {
    method: 'PATCH',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };

  //send headers and request to URL
  const response = await fetch(url, options);

  const { status } = response;

  const data = await response.json();
  return { data, status };
};

export = { get, post, patch };
