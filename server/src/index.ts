import path from 'path';

import express from 'express';

const PORT = process.argv[2] || process.env.PORT || 3000;
const pathToApp: string = path.join(__dirname, '..', '..', 'dist', 'app');
const server = express();

server.use('/', express.static(pathToApp));
server.get('*', (_req, res) => {
    res.sendFile(path.join(pathToApp, 'index.html'));
});

server.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Launched @ ${PORT}!`);
});
