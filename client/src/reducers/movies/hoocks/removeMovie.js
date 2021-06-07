import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { API } from '../../../constants/api';
import { moviesActions } from '../actions';

export const useRemoveMovies = () => {
	const dispatch = useDispatch();

	const removeMovies = useCallback(
		async (id) => {
			try {
				const res = await fetch(`${API.MOVIES}/${id}`, {
					method: 'DELETE',
					headers: {
						'Content-Type': 'application/json'
					},
					mode: 'cors'
				});
				if (res.status !== 200) {
					const error = await res.json();
					throw new Error(error.message);
				}
				dispatch(moviesActions.removeMovie(id));
			} catch (e) {
				dispatch(moviesActions.createdError(e.message));
				console.error(e);
			}
		},
		[ dispatch ]
	);

	return { removeMovies };
};
