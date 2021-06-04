import React, { useState } from 'react';
import Modal from 'react-modal';
import { CardWrapper, CardTitle, CardButton, ButtonBlock } from './styles';
import { RemoveButton } from '../RemoveButton/RemoveButton';

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
	const openMOdal = () => {
		setIsOpen(true);
	};
	const closeModal = () => {
		setIsOpen(false);
	};
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
					<h2 style={{ textAlign: 'center' }}>Title: {movie.Title}</h2>
					<h3>Release Year: {movie['Release Year']}</h3>
					<h3>Format: {movie.Format}</h3>
					<p>Stars:</p>
					<ul>{movie.Stars.map((star) => <li key={star}>{star}</li>)}</ul>
					<button onClick={closeModal}>close</button>
				</Modal>
				<RemoveButton id={movie._id} />
			</ButtonBlock>
		</CardWrapper>
	);
};
