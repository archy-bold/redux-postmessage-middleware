import { Dispatch, MiddlewareAPI } from 'redux';

import { MessageDispatcher } from '../messaging';
import { isLocalAction } from '../action-helpers';

export type MessageDispatcherDependencies = {
  dispatch: MessageDispatcher
};

export type DispatcherMiddlewareFactory = <S>(deps: MessageDispatcherDependencies) => (api: MiddlewareAPI<S>) => (next: Dispatch<S>) => Dispatch<S>;

export const MessageDispatcherMiddleware: DispatcherMiddlewareFactory = <S>({ dispatch }: MessageDispatcherDependencies) =>
  () => (next: Dispatch<S>) => (action: any) => {
    if (isLocalAction(action)) {
      dispatch(action);
    }
    return next(action);
  };
