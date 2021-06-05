import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { API } from '../../../constants/api';
import { moviesActions } from '../actions';

export const useSetMovies = () => {
	const dispatch = useDispatch();

	const setMovies = useCallback(
		async (formData) => {
			try {
				dispatch(moviesActions.startLoading());
				const res = await fetch(`${API.MOVIES}`, {
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

				dispatch(moviesActions.setPartialMovies(data));
			} catch (e) {
				console.error(e);
			}
		},
		[ dispatch ]
	);

	return { setMovies };
};
