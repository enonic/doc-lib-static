import {serviceUrl} from '/lib/xp/portal';

const myStaticUrl = (path: string) => `${serviceUrl({service: 'myStatic'})}/${path}`;

export const get = () => {
  return {
    body: `<!DOCTYPE html>
<html>
<head>
    <title>Dynamic Page with static assets</title>
    <link rel="stylesheet" href="${myStaticUrl('css/style.css')}"/>
</head>
<body>
    <main>
        <h1>Dynamic Page with static assets</h1>
        <p>All text on this page shoule be mediumblue.</p>
    </main>
</body>
</html>`,
    status: 200
  };
};
