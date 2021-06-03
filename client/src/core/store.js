import { createStore } from 'redux';
import { enhancedStore } from './middleware/core';
import { rootReducer } from './rootReducer';

export const store = createStore(rootReducer, enhancedStore);
