import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { moviesActions } from '../../reducers/movies/actions';
import { selecIsShownInfoMessage } from '../../reducers/movies/selectors';
import { MessageWrapper, MessageText } from './styles';

export const InfoMessage = () => {
	const dispatch = useDispatch();
	const isShowMesage = useSelector(selecIsShownInfoMessage);

	useEffect(
		() => {
			let titerID;
			if (isShowMesage) {
				titerID = setTimeout(() => {
					dispatch(moviesActions.clearInfoMessage());
				}, 2000);
			}
			return () => {
				clearTimeout(titerID);
			};
		},
		[ isShowMesage, dispatch ]
	);

	return isShowMesage ? (
		<MessageWrapper>
			<MessageText>You added new movie(s)</MessageText>
		</MessageWrapper>
	) : null;
};
