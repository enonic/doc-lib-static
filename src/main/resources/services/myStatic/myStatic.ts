import {
  RESPONSE_CACHE_CONTROL,
  requestHandler,
} from '/lib/enonic/static';
import Router from '/lib/router';

const router = Router();
router.all('{path:.*}', (request) => {
  return requestHandler(
    request,
    {
      cacheControl: () => RESPONSE_CACHE_CONTROL.SAFE, // <1>
      index: false, // <2>
    }
  );
});

export const all = (request) => router.dispatch(request);
