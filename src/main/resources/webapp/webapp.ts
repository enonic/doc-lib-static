import {
  RESPONSE_CACHE_CONTROL,
  defaultCacheControl,
  requestHandler,
  spaNotFoundHandler,
} from '/lib/enonic/static';
import Router from '/lib/router';

const router = Router();
router.get('{path:.*}', (request) => requestHandler(
  request,
  {
    // Override the defaultCacheControl
        contentType,
        path,
        resource,
    }) => {
      // The "webapp/files/vite.svg" file has no contentHash
      if (path.startsWith('/vite.svg')) {
        return RESPONSE_CACHE_CONTROL.SAFE;
      }
      // fall back to defaultCacheControl for all other assets.
      return defaultCacheControl({
        contentType,
        path,
        resource,
      });
    },
    // Fallback to SPA index.html when asset not found
    notFound: spaNotFoundHandler,
    root: '/webapp/files',
  }
));

export const all = (request) => router.dispatch(request);