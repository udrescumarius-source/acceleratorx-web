import {getRequestConfig} from 'next-intl/server';
import {defaultLocale} from '../../i18n';

export default getRequestConfig(async ({locale}) => {
  const loc = locale ?? defaultLocale;
  return {
    locale: loc,
    messages: (await import(`../../messages/${loc}.json`)).default
  };
});