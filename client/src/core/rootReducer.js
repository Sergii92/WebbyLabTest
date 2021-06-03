import { combineReducers } from 'redux';
import { moviesReducers as movies } from '../reducers/movies/reducer';

export const rootReducer = combineReducers({ movies });
