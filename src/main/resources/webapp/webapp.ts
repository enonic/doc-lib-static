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

      // Override the defaultCacheControl by passing our own cacheControl function
      cacheControl: ({
          contentType,
          path,
          resource,
      }) => {

        // The "build/resources/main/webapp/files/vite.svg" file has no contentHash in it's
        // filename, so it should NOT be using the default immutable cacheControl header.
        if (path.startsWith('/vite.svg')) {
          return RESPONSE_CACHE_CONTROL.SAFE;
        }

        // After the custom logic, fallback to using
        // the defaultCacheControl for everything else.
        return defaultCacheControl({
          contentType,
          path,
          resource,
        });

      },

      // When a request does not match any resource file, serve the SPA index.html,
      // and let the React Router handle routing and potential 404.
      notFound: spaNotFoundHandler,

      // This is the location under build/resources/main where the React app is built to.
      root: '/webapp/files',
    }
  ));

  export const all = (request) => router.dispatch(request);