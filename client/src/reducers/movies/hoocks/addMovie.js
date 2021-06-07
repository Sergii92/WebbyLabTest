import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { API } from '../../../constants/api';
import { moviesActions } from '../actions';

export const useAddMovie = () => {
	const dispatch = useDispatch();

	const addMovie = useCallback(
		async (formData) => {
			try {
				const res = await fetch(`${API.MOVIES}/create`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: formData,
					mode: 'cors'
				});

				if (res.status !== 200) {
					const error = await res.json();
					throw new Error(error.message);
				}
				const data = await res.json();
				dispatch(moviesActions.setPartialMovies([ ...data ]));
			} catch (e) {
				dispatch(moviesActions.createdError(e.message));
				console.error(e);
			}
		},
		[ dispatch ]
	);

	return { addMovie };
};
