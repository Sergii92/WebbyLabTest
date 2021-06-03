import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { API } from '../../../constants/api';
import { moviesActions } from '../actions';

export const useGetMovies = () => {
	const dispatch = useDispatch();

	const getAllMovies = useCallback(
		async (formData) => {
			try {
				const res = await fetch(`${API.MOVIES}`);
				if (res.status !== 200) {
					throw new Error(res.status);
				}

				const data = await res.json();

				dispatch(moviesActions.setAllMovies(data));
			} catch (e) {
				console.log(e);
			}
		},
		[ dispatch ]
	);

	return { getAllMovies };
};
