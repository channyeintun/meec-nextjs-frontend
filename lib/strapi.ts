import { strapi } from '@strapi/client';

export const strapi_client = strapi({ baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api` });