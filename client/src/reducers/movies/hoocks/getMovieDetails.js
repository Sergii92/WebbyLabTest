import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { API } from '../../../constants/api';
import { moviesActions } from '../actions';

export const useGetMovieDetails = () => {
	const dispatch = useDispatch();

	const getMovieDetails = useCallback(
		async (id) => {
			try {
				const res = await fetch(`${API.MOVIES}/${id}`);
				if (res.status !== 200) {
					throw new Error(res.status);
				}

				const data = await res.json();

				dispatch(moviesActions.setMovieDetails(data));
			} catch (e) {
				console.error(e);
			}
		},
		[ dispatch ]
	);

	return { getMovieDetails };
};
