import {
  mappedRelativePath,
  requestHandler,
} from '/lib/enonic/static';
import Router from '/lib/router';

const router = Router();
router.get('{path:.*}', (request) => {
  log.info('mapped get request:%s', JSON.stringify(request, null, 4));
  return requestHandler(
    request,
    {
      relativePath: mappedRelativePath('mymapping'), // <1>
      root: '/site/controllers/myController/files', // <2>
    }
  );
});

export const all = (request) => router.dispatch(request);
