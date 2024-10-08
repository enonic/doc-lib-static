import {
  mappedRelativePath,
  requestHandler,
  // @ts-expect-error not types
} from '/lib/enonic/static';
// @ts-expect-error not types
import Router from '/lib/router';


const router = Router();

router.get('{path:.*}', (request) => {
  log.info('mapped get request:%s', JSON.stringify(request, null, 4));
  return requestHandler(
    request,
    {
      // The base path should match the one used in site.xml
      relativePath: mappedRelativePath('_static/mapped'),

      // Which files to serve under the mapped path
      root: '/site/controllers/myController/files',
    }
  );
});

export const all = (request) => router.dispatch(request);
