import React, { useCallback } from 'react';
import { useRemoveMovies } from '../../reducers/movies/hoocks/removeMovie';
import { RemovedButton } from './styles';

export const RemoveButton = ({ id }) => {
	const { removeMovies } = useRemoveMovies();

	const onRemoveHandler = useCallback(
		() => {
			removeMovies(id);
		},
		[ id, removeMovies ]
	);

	return <RemovedButton onClick={onRemoveHandler}>Delete</RemovedButton>;
};
