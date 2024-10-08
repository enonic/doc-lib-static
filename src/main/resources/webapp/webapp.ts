import {
    RESPONSE_CACHE_CONTROL,
    defaultCacheControl,
    requestHandler,
    spaNotFoundHandler,
    // @ts-expect-error not types
  } from '/lib/enonic/static';
  // @ts-expect-error not types
  import Router from '/lib/router';
  const router = Router();
  router.get('{path:.*}', (request) => requestHandler(
    request,
    {
      cacheControl: ({
          contentType,
          path,
          resource,
      }) => {
        if (path.startsWith('/vite.svg')) {
          return RESPONSE_CACHE_CONTROL.SAFE;
        }
        return defaultCacheControl({
          contentType,
          path,
          resource,
        });
      },
      notFound: spaNotFoundHandler,
      root: '/static/react',
    }
  ));

  export const all = (request) => router.dispatch(request);