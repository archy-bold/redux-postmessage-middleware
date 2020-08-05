import { Dispatch, MiddlewareAPI } from 'redux';
import { MessageDispatcher } from '../messaging';
export declare type MessageDispatcherDependencies = {
    dispatch: MessageDispatcher;
};
export declare type DispatcherMiddlewareFactory = <S>(deps: MessageDispatcherDependencies) => (api: MiddlewareAPI<S>) => (next: Dispatch<S>) => Dispatch<S>;
export declare const MessageDispatcherMiddleware: DispatcherMiddlewareFactory;
