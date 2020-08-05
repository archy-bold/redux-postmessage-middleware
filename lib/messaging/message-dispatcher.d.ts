export declare type MessageDispatcher = (action: any) => void;
export declare const createMessageDispatcher: ({window, document, senderURL, parentURL, targetURLs}: {
    window: Window;
    document: Document;
    senderURL: string;
    parentURL?: string | undefined;
    targetURLs?: string[] | undefined;
}) => MessageDispatcher;
