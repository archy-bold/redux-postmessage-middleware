import { Store, Dispatch, Middleware, MiddlewareAPI } from 'redux';

import { REMOTE_ACTION } from '../constants';
import { MessageToActionHandler } from '../messaging';

export type MessageReceiverDependencies = {
  messageToActionHandler: MessageToActionHandler;
};

export type ReceiverMiddlewareFactory = (deps: MessageReceiverDependencies) => Middleware;

export const MessageReceiverMiddleware: ReceiverMiddlewareFactory = ({ messageToActionHandler }: MessageReceiverDependencies) =>
  (store: MiddlewareAPI<{}>) => {
    window.addEventListener('message', messageToActionHandler((msgAction: any) => {
      store.dispatch(Object.defineProperty(msgAction, REMOTE_ACTION, { value: true }))
    }));
    return (next: Dispatch<{}>) => (action: any) => next(action);
  };
