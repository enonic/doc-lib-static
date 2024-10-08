import {
    RESPONSE_CACHE_CONTROL,
    requestHandler,
    webAppCacheControl,
    // @ts-expect-error not types
  } from '/lib/enonic/static';
  // @ts-expect-error not types
  import Router from '/lib/router';
  const router = Router();
  router.get('{path:.*}', (request: Request) /* : Response */ => requestHandler({
    cacheControl: ({
        contentType,
        path,
        resource,
    }) => {
      if (path.startsWith('/vite.svg')) {
        return RESPONSE_CACHE_CONTROL.SAFE;
      }
      return webAppCacheControl({
        contentType,
        path,
        resource,
      });
    },
    request,
    root: '/static/react',
  }));

  export const all = (request: Request): Response => router.dispatch(request);