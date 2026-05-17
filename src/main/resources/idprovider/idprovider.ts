import {mappedRelativePath, requestHandler} from '/lib/enonic/static';
import Router from '/lib/router';

const router = Router();

router.get('/_static/{path:.*}', (request) => requestHandler(request, { // <1>
  root: '/idprovider/files',
  relativePath: mappedRelativePath('_static'),
}));

router.get('{path:.*}', (request) => ({ // <2>
  contentType: 'text/html',
  body: `<link rel="stylesheet" href="${request.contextPath}/_static/login.css"/>`
    + `<form action="${request.contextPath}" method="post">`
    + `  <input name="user"/><input name="password" type="password"/>`
    + `  <button type="submit">Sign in</button>`
    + `</form>`,
}));

export const GET = (request) => router.dispatch(request);
