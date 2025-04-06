declare namespace Networking {
    export class Request {
        private readonly type;
        private readonly responseType;
        url?: string;
        headers?: any;
        body: any;
        timeout: number;
        duration: number;
        constructor(type: "get" | "post" | "put", responseType: "none" | "JSON" | "TXT");
        setURL(url: string): void;
        setHeader(key: string, value: string): void;
        setBody(body: any): void;
        setDuration(duration: number): void;
        fire(): Promise<void>;
    }
    export class GetJSON extends Request {
        constructor();
    }
    export class PostJSON extends Request {
        constructor();
    }
    export const createWebsocketConnection: (endpoint: string) => WebSocketConnection;
    class Connection {
        endpoint: string;
        alive: boolean;
        constructor(endpoint: string);
    }
    class WebSocketConnection extends Connection {
        webSocket: WebSocket;
        constructor(endpoint: string);
        onWebSocketOpen(): void;
        onWebSocketClose(event: any): void;
        fireWebSocketEvent(action: string, payload: any): void;
    }
    export {};
}
export default Networking;
