import { createServer } from 'node:http';

import send from './send.ts';

createServer(function (request, response) {
    if (request.url !== '/api/health'){
        response.writeHead(404, { 'content-type': 'application/json' });
        response.end(JSON.stringify({ message: 'Recurso não encontrado' }));
        return;
    }

    send(response, 200, { status: 'ok'});
}).listen(3000);
