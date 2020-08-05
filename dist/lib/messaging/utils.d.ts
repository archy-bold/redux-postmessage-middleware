export declare function parseURL(url: string, document: Document): string[];
export declare function buildURL(protocol: string, hostname: string, port?: string, pathname?: string): string;
export declare function getOrigin(loc: any): string;
export declare const originFromURL: (document: Document) => (url: string) => string;
export declare const isString: (value: any) => boolean;
