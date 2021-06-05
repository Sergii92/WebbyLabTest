import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { moviesActions } from '../../reducers/movies/actions';
import { Loader } from '../Loader/Loader';
import { DeteilsWrapper, DeteilsTitle, DeteilsInfo, DeteilsList, ListItem } from './styles';

import { selectMovieDetails } from '../../reducers/movies/selectors';
import { CardButton } from '../Card/styles';

export const MovieDetails = ({ closeModal }) => {
	const movieDetails = useSelector(selectMovieDetails);
	const dispatch = useDispatch();

	useEffect(() => {
		return () => {
			dispatch(moviesActions.clearMovieDetails());
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	const detail = movieDetails ? (
		<DeteilsWrapper>
			<DeteilsTitle>Title: {movieDetails.Title}</DeteilsTitle>
			<DeteilsInfo>Release Year: {movieDetails['Release Year']}</DeteilsInfo>
			<DeteilsInfo>Format: {movieDetails.Format}</DeteilsInfo>
			<DeteilsInfo>Stars:</DeteilsInfo>
			<DeteilsList>{movieDetails.Stars.map((star) => <ListItem key={star}>{star}</ListItem>)}</DeteilsList>
			<CardButton onClick={closeModal}>Close</CardButton>
		</DeteilsWrapper>
	) : (
		<Loader />
	);

	return detail;
};
