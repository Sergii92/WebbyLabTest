import { TYPES } from './types';

const initialState = {
	movies: []
};

export const moviesReducers = (state = initialState, { type, payload }) => {
	switch (type) {
		case TYPES.SET_PARTIAL_MOVIES:
			return {
				...state,
				movies: [ ...state.movies, ...payload ]
			};
		case TYPES.SET_ALL_MOVIES:
			return {
				...state,
				movies: payload
			};
		case TYPES.REMOVE_MOVIE:
			return {
				...state,
				movies: state.movies.filter(({ _id }) => _id !== payload)
			};
		default:
			return state;
	}
};
