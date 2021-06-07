import { TYPES } from './types';

const initialState = {
	moviesList: [],
	movieDetails: null,
	isLoading: false,
	errors: '',
	isInfoMessageShown: false
};
let collator = new Intl.Collator();

export const moviesReducers = (state = initialState, { type, payload }) => {
	switch (type) {
		case TYPES.SET_PARTIAL_MOVIES:
			return {
				...state,
				moviesList: [ ...state.moviesList, ...payload ],
				isLoading: false,
				isInfoMessageShown: true
			};
		case TYPES.SET_ALL_MOVIES:
			return {
				...state,
				moviesList: payload,
				isLoading: false
			};
		case TYPES.REMOVE_MOVIE:
			return {
				...state,
				moviesList: state.moviesList.filter(({ _id }) => _id !== payload)
			};
		case TYPES.SORT_MOVIES:
			return {
				...state,
				moviesList: [ ...state.moviesList.sort((a, b) => collator.compare(a['Title'], b['Title'])) ]
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
		case TYPES.MOVIES_LOADING_STARTED:
			return {
				...state,
				isLoading: true
			};
		case TYPES.CREATE_ERROR:
			return {
				...state,
				errors: payload,
				isLoading: false
			};
		case TYPES.CLEAR_ERROR:
			return {
				...state,
				errors: ''
			};
		case TYPES.CLEAR_INFO_MESSAGE:
			return {
				...state,
				isInfoMessageShown: false
			};
		default:
			return state;
	}
};
