import { createMessageDispatcher, createMessageToActionHandler } from './messaging';
import { MessageDispatcherMiddleware, MessageReceiverMiddleware } from './middlewares';
// @ts-ignore
import { Dispatch, MiddlewareAPI } from 'redux';

export { actionType } from './action-helpers';

type MessageDispatchingOptions = {
  senderURL: string;
  parentURL?: string;
  targetURLs?: string[];
};

export const createMessageDispatcherMiddleware = <S>({ senderURL, parentURL, targetURLs }: MessageDispatchingOptions) => {
  const dispatch = createMessageDispatcher({
    window,
    document,
    senderURL,
    parentURL,
    targetURLs,
  });

  return MessageDispatcherMiddleware<S>({ dispatch });
}

type MessageReceiverOptions = {
  allowedURLs: string[];
};

export const createMessageReceiverMiddleware = <S>({ allowedURLs }: MessageReceiverOptions) => {
  const messageToActionHandler = createMessageToActionHandler({
    allowedURLs
  });

  return MessageReceiverMiddleware<S>({ messageToActionHandler });
}
