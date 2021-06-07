import React, { useCallback, useState } from 'react';
import { useRemoveMovies } from '../../reducers/movies/hoocks/removeMovie';
import { RemovedButton, Modal, ModalText } from './styles';

export const RemoveButton = ({ id }) => {
	const [ isOpen, setIsOpen ] = useState(false);
	const { removeMovies } = useRemoveMovies();

	const onRemoveHandler = useCallback(
		() => {
			removeMovies(id);
			setIsOpen(false);
		},
		[ id, removeMovies ]
	);

	const openModal = () => {
		setIsOpen(true);
	};
	const closeModal = () => {
		setIsOpen(false);
	};

	const modal = (
		<Modal>
			<ModalText> Are you sure?</ModalText>
			<RemovedButton onClick={onRemoveHandler}>Yes</RemovedButton>
			<RemovedButton onClick={closeModal}>No</RemovedButton>
		</Modal>
	);

	return (
		<React.Fragment>
			<RemovedButton onClick={openModal}>Delete</RemovedButton>
			{isOpen ? modal : null}
		</React.Fragment>
	);
};
