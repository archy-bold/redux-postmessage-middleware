import { createMessageDispatcher, createMessageToActionHandler } from './messaging';
import { MessageDispatcherMiddleware, MessageReceiverMiddleware } from './middlewares';
import { Store, Dispatch, Middleware, MiddlewareAPI } from 'redux';

export { actionType } from './action-helpers';

type MessageDispatchingOptions = {
  senderURL: string;
  parentURL?: string;
  targetURLs?: string[];
};

export const createMessageDispatcherMiddleware = ({ senderURL, parentURL, targetURLs }: MessageDispatchingOptions) => {
  const dispatch = createMessageDispatcher({
    window,
    document,
    senderURL,
    parentURL,
    targetURLs,
  });

  return MessageDispatcherMiddleware({ dispatch });
}

type MessageReceiverOptions = {
  allowedURLs: string[];
};

export const createMessageReceiverMiddleware = ({ allowedURLs }: MessageReceiverOptions) => {
  const messageToActionHandler = createMessageToActionHandler({
    allowedURLs
  });

  return MessageReceiverMiddleware({ messageToActionHandler });
}
