import { Dispatch, Middleware, MiddlewareAPI } from 'redux';

import { MessageDispatcher } from '../messaging';
import { isLocalAction } from '../action-helpers';

export type MessageDispatcherDependencies = {
  dispatch: MessageDispatcher
};

export type DispatcherMiddlewareFactory = (deps: MessageDispatcherDependencies) => Middleware;

export const MessageDispatcherMiddleware: DispatcherMiddlewareFactory = ({ dispatch }: MessageDispatcherDependencies) =>
  () => (next: Dispatch<{}>) => (action: any) => {
    if (isLocalAction(action)) {
      dispatch(action);
    }
    return next(action);
  };
