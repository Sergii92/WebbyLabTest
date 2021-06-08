import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectError } from '../../reducers/movies/selectors';
import { moviesActions } from '../../reducers/movies/actions';
import { ErrorMessage, ErrorWrapper, CloseButton, ModalContent } from './styles';

export const ErrorModal = () => {
	const dispatch = useDispatch();

	const onClickHandler = () => {
		dispatch(moviesActions.clearError());
	};

	const errorMessage = useSelector(selectError);
	return errorMessage ? (
		<ErrorWrapper>
			<ModalContent>
				<ErrorMessage>{errorMessage}</ErrorMessage>
				<CloseButton onClick={onClickHandler} />
			</ModalContent>
		</ErrorWrapper>
	) : null;
};
