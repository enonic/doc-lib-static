import {mappedRelativePath, requestHandler} from '/lib/enonic/static';
import Router from '/lib/router';

const router = Router();

router.get('/_static/{path:.*}', (request) => requestHandler(request, { // <1>
  root: '/admin/extensions/myExtension/files',
  relativePath: mappedRelativePath('_static'),
}));

router.get('{path:.*}', (request) => ({ // <2>
  contentType: 'text/html',
  body: `<link rel="stylesheet" href="${request.contextPath}/_static/styles.css"/>`
    + `<h1>Static asset demo</h1>`,
}));

export const GET = (request) => router.dispatch(request);
