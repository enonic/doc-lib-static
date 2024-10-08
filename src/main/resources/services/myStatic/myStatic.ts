import {
  RESPONSE_CACHE_CONTROL,
  requestHandler,
  // @ts-expect-error not types
} from '/lib/enonic/static';
// @ts-expect-error not types
import Router from '/lib/router';


const router = Router();

router.all('{path:.*}', (request) => {
  return requestHandler(
    request,
    {
      // Since the stylesheet file doesn't contain a contentHash in it's filename,
      // make sure it's not served with cache-control immutable.
      cacheControl: () => RESPONSE_CACHE_CONTROL.SAFE,

      // Since only a stylesheet is served,
      // skip all code related to serving index.html files.
      index: false,

      // Where the static files served by this service are located.
      root: '/services/myStatic/files',
    }
  );
});

export const all = (request) => router.dispatch(request);
