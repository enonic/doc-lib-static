import {requestHandler} from '/lib/enonic/static';

export const GET = (request) => requestHandler(request, {root: '/static/idprovider'});
