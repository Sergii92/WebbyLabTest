import React, { useState, useCallback } from 'react';
import Modal from 'react-modal';
import { useGetMovieDetails } from '../../reducers/movies/hoocks/getMovieDetails';
import { CardWrapper, CardTitle, CardButton, ButtonBlock } from './styles';
import { RemoveButton } from '../RemoveButton/RemoveButton';
import { MovieDetails } from '../MovieDetail/MovieDetail';

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		width: '30%'
	}
};

export const Card = ({ movie }) => {
	const [ modalIsOpen, setIsOpen ] = useState(false);
	const { getMovieDetails } = useGetMovieDetails();

	const openMOdal = () => {
		setIsOpen(true);
		getMovieDetails(movie._id);
	};
	const closeModal = useCallback(() => {
		setIsOpen(false);
	}, []);

	return (
		<CardWrapper>
			<CardTitle>{movie.Title}</CardTitle>
			<ButtonBlock>
				<CardButton onClick={openMOdal}>Show more</CardButton>
				<Modal
					isOpen={modalIsOpen}
					onRequestClose={closeModal}
					style={customStyles}
					contentLabel="Example Modal"
				>
					<MovieDetails closeModal={closeModal} />
				</Modal>
				<RemoveButton id={movie._id} />
			</ButtonBlock>
		</CardWrapper>
	);
};
