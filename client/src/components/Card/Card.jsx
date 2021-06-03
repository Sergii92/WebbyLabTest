import React from 'react';
import { CardWrapper, CardTitle, CardButton, ButtonBlock } from './styles';
import { RemoveButton } from '../RemoveButton/RemoveButton';

export const Card = ({ movie }) => {
	return (
		<CardWrapper>
			<CardTitle>{movie.Title}</CardTitle>
			<ButtonBlock>
				<CardButton>Show more</CardButton>
				<RemoveButton id={movie._id} />
			</ButtonBlock>
		</CardWrapper>
	);
};
