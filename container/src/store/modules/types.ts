import { Action } from 'redux';

export interface SagaAction<T> extends Action {
  payload: T;
}
