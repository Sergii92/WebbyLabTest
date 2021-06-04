import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { API } from '../../../constants/api';
import { moviesActions } from '../actions';

export const useSearchMovies = () => {
	const dispatch = useDispatch();

	const searchMovies = useCallback(
		async (searchParam) => {
			try {
				const res = await fetch(`${API.MOVIES}/search?str=${searchParam}`);
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

	return { searchMovies };
};
