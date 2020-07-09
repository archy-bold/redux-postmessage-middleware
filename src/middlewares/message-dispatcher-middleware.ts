import { Dispatch, Middleware, MiddlewareAPI } from 'redux';

import { MessageDispatcher } from '../messaging';
import { isLocalAction } from '../action-helpers';

export type MessageDispatcherDependencies = {
  dispatch: MessageDispatcher
};

export type DispatcherMiddlewareFactory = <S>(deps: MessageDispatcherDependencies) => Middleware;

export const MessageDispatcherMiddleware: DispatcherMiddlewareFactory = <S>({ dispatch }: MessageDispatcherDependencies) =>
  () => (next: Dispatch<S>) => (action: any) => {
    if (isLocalAction(action)) {
      dispatch(action);
    }
    return next(action);
  };
