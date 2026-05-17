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

export const get = (request) => router.dispatch(request);

// XP also calls these specific entry points on the controller; left as stubs
// here — see the ID provider docs for the full contract.
export const login = (request) => ({status: 200});
export const logout = (request) => ({status: 200});
