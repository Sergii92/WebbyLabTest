import { TYPES } from './types';

export const moviesActions = {
	setPartialMovies: (movies) => ({
		type: TYPES.SET_PARTIAL_MOVIES,
		payload: movies
	}),
	setAllMovies: (movies) => ({
		type: TYPES.SET_ALL_MOVIES,
		payload: movies
	}),
	removeMovie: (id) => ({
		type: TYPES.REMOVE_MOVIE,
		payload: id
	})
};
