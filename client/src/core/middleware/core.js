import { applyMiddleware, compose } from 'redux';

const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const composeEnchancers = devtools ? devtools : compose;

const middleware = [];

const enhancedStore = composeEnchancers(applyMiddleware(...middleware));

export { enhancedStore };
