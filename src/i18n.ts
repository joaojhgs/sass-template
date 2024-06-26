import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => ({
  messages: {
    ...(await import(`./locale/messages/${locale}.json`)).default,
    ...(await import(`./locale/messages/zod/${locale}.json`)).default,
  },
}));
