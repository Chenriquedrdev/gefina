import { ServerResponse} from 'node:http';

export default function send(
    response: ServerResponse,
    statusCode: number,
    body: unknown
): void {
    response.writeHead(
        statusCode,
        { 'content-type': 'application/jason' }
    );
    response.end(JSON.stringify(body));
}