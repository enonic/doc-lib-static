import {
  RESPONSE_CACHE_CONTROL,
  defaultCacheControl,
  requestHandler,
  spaNotFoundHandler,
} from '/lib/enonic/static';
import Router from '/lib/router';

const router = Router();

router.get('{path:.*}', (request) => requestHandler(request, {
  cacheControl: ({contentType, path, resource}) => { // <1>
    // The "webapp/files/vite.svg" file has no contentHash
    if (path.startsWith('/vite.svg')) {
      return RESPONSE_CACHE_CONTROL.SAFE;
    }
    // Fall back to defaultCacheControl for all other assets.
    return defaultCacheControl({contentType, path, resource});
  },
  notFound: spaNotFoundHandler, // <2>
  root: '/webapp/files',
}));

export const GET = (request) => router.dispatch(request);
