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
					throw new Error(res.status);
				}
				const data = await res.json();
				dispatch(moviesActions.setAllMovies(data));
			} catch (e) {
				console.error(e);
			}
		},
		[ dispatch ]
	);

	return { getAllMovies };
};
