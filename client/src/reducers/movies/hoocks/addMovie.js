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
					throw new Error(res.status);
				}

				const data = await res.json();

				dispatch(moviesActions.setPartialMovies([ data ]));
			} catch (e) {
				console.log(e);
			}
		},
		[ dispatch ]
	);

	return { addMovie };
};
