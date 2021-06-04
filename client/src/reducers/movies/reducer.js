import { TYPES } from './types';

const initialState = {
	moviesList: [],
	movieDetails: null
};

export const moviesReducers = (state = initialState, { type, payload }) => {
	switch (type) {
		case TYPES.SET_PARTIAL_MOVIES:
			return {
				...state,
				moviesList: [ ...state.moviesList, ...payload ]
			};
		case TYPES.SET_ALL_MOVIES:
			return {
				...state,
				moviesList: payload
			};
		case TYPES.REMOVE_MOVIE:
			return {
				...state,
				moviesList: state.moviesList.filter(({ _id }) => _id !== payload)
			};
		case TYPES.SORT_MOVIES:
			return {
				...state,
				moviesList: [
					...state.moviesList.sort((a, b) => (a['Title'].toUpperCase() > b['Title'].toUpperCase() ? 1 : -1))
				]
			};
		case TYPES.SET_MOVIE_DETAILS:
			return {
				...state,
				movieDetails: payload
			};
		case TYPES.CLEAR_MOVIE_DETAILS:
			return {
				...state,
				movieDetails: null
			};

		default:
			return state;
	}
};
