import { Dispatch, MiddlewareAPI } from 'redux';
export { actionType } from './action-helpers';
export declare const createMessageDispatcherMiddleware: <S>({senderURL, parentURL, targetURLs}: {
    senderURL: string;
    parentURL?: string | undefined;
    targetURLs?: string[] | undefined;
}) => (api: MiddlewareAPI<S>) => (next: Dispatch<S>) => Dispatch<S>;
export declare const createMessageReceiverMiddleware: <S>({allowedURLs}: {
    allowedURLs: string[];
}) => (api: MiddlewareAPI<S>) => (next: Dispatch<S>) => Dispatch<S>;
