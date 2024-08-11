import {
  createStore,
  compose,
  applyMiddleware,
  Middleware,
  Reducer,
} from 'redux';

export default (reducers: Reducer, middlewares: Middleware[]) => {
  const enhancer =
    process.env.NODE_ENV === 'development'
      ? compose(applyMiddleware(...middlewares))
      : applyMiddleware(...middlewares);

  return createStore(reducers, enhancer);
};
