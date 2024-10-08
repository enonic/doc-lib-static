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
      cacheControl: () => RESPONSE_CACHE_CONTROL.SAFE,
      index: false,
      root: '/services/myStatic/files',
    }
  );
});

export const all = (request) => router.dispatch(request);
