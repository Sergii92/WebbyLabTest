import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { API } from '../../../constants/api';
import { moviesActions } from '../actions';

export const useGetAllMovies = () => {
	const dispatch = useDispatch();

	const getAllMovies = useCallback(
		async () => {
			try {
				dispatch(moviesActions.startLoading());
				const res = await fetch(`${API.MOVIES}`);
				if (res.status !== 200) {
					const error = await res.json();
					throw new Error(error.message);
				}
				const data = await res.json();
				dispatch(moviesActions.setAllMovies(data));
			} catch (e) {
				dispatch(moviesActions.createdError(e.message));
				console.error(e);
			}
		},
		[ dispatch ]
	);

	return { getAllMovies };
};
