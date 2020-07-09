import { Dispatch, MiddlewareAPI } from 'redux';

import { REMOTE_ACTION } from '../constants';
import { MessageToActionHandler } from '../messaging';

export type MessageReceiverDependencies = {
  messageToActionHandler: MessageToActionHandler;
};

export type ReceiverMiddlewareFactory = <S>(deps: MessageReceiverDependencies) => (api: MiddlewareAPI<S>) => (next: Dispatch<S>) => Dispatch<S>;

export const MessageReceiverMiddleware: ReceiverMiddlewareFactory = <S>({ messageToActionHandler }: MessageReceiverDependencies) =>
  (store: MiddlewareAPI<S>) => {
    window.addEventListener('message', messageToActionHandler((msgAction: any) => {
      store.dispatch(Object.defineProperty(msgAction, REMOTE_ACTION, { value: true }))
    }));
    return (next: Dispatch<S>) => (action: any) => next(action);
  };
