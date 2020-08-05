import { Dispatch, MiddlewareAPI } from 'redux';
import { MessageToActionHandler } from '../messaging';
export declare type MessageReceiverDependencies = {
    messageToActionHandler: MessageToActionHandler;
};
export declare type ReceiverMiddlewareFactory = <S>(deps: MessageReceiverDependencies) => (api: MiddlewareAPI<S>) => (next: Dispatch<S>) => Dispatch<S>;
export declare const MessageReceiverMiddleware: ReceiverMiddlewareFactory;
