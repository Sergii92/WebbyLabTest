import { TYPES } from './types';

export const moviesActions = {
	startLoading: () => ({
		type: TYPES.MOVIES_LOADING_STARTED
	}),
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
	}),
	sortMovies: () => ({
		type: TYPES.SORT_MOVIES
	}),
	setMovieDetails: (movie) => ({
		type: TYPES.SET_MOVIE_DETAILS,
		payload: movie
	}),
	clearMovieDetails: () => ({
		type: TYPES.CLEAR_MOVIE_DETAILS
	}),
	createdError: (message) => ({
		type: TYPES.CREATE_ERROR,
		payload: message
	}),
	clearError: () => ({
		type: TYPES.CLEAR_ERROR
	})
};
