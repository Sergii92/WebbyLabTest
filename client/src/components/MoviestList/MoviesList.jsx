import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoading } from '../../reducers/movies/selectors';
import { Card } from '../Card/Card';
import { Loader } from '../Loader/Loader';

export const MoviesList = ({ movies }) => {
	const isLoading = useSelector(selectIsLoading);
	return isLoading ? (
		<Loader />
	) : (
		<React.Fragment>{movies.map((movie) => <Card movie={movie} key={movie._id} />)} </React.Fragment>
	);
};
