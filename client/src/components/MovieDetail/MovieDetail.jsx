import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { moviesActions } from '../../reducers/movies/actions';
import { Loader } from '../Loader/Loader';

import { selectMovieDetails } from '../../reducers/movies/selectors';

export const MovieDetails = ({ closeModal }) => {
	const movieDetails = useSelector(selectMovieDetails);
	const dispatch = useDispatch();

	useEffect(() => {
		return () => {
			dispatch(moviesActions.clearMovieDetails());
		};
	}, []);
	const detail = movieDetails ? (
		<div>
			<h2 style={{ textAlign: 'center' }}>Title: {movieDetails.Title}</h2>
			<h3>Release Year: {movieDetails['Release Year']}</h3>
			<h3>Format: {movieDetails.Format}</h3>
			<p>Stars:</p>
			<ul>{movieDetails.Stars.map((star) => <li key={star}>{star}</li>)}</ul>
			<button onClick={closeModal}>close</button>
		</div>
	) : (
		<Loader />
	);

	return detail;
};
