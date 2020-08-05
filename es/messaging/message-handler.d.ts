export declare type ActionHandler = (action: any) => void;
export declare type MessageHandler = (ev: MessageEvent) => void;
export declare type MessageToActionHandler = (fn: ActionHandler) => MessageHandler;
export declare const createMessageToActionHandler: ({allowedURLs}: {
    allowedURLs: string[];
}) => MessageToActionHandler;
